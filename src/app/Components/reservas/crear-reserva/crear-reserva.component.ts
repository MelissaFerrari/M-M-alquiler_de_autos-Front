import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  dniCliente: string = '';
  nombreCliente: string = '';
  dominioAuto: string = '';
  nombreAuto: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  mensajeError: string = '';
  mensajeExito: string = '';

  clientes: any[] = [];
  autos: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/getclientes').subscribe(data => {
      this.clientes = data;
    });

    this.http.get<any[]>('http://localhost:8080/getautos').subscribe(data => {
      this.autos = data;
    });
  }

  buscarCliente(): void {
    const cliente = this.clientes.find(c => c.dni === this.dniCliente);
    if (cliente) {
      this.nombreCliente = cliente.nombreCompleto;
      this.mensajeError = '';
    } else {
      this.nombreCliente = '';
      this.mensajeError = 'Cliente no encontrado.';
    }
  }

  buscarAuto(): void {
    const auto = this.autos.find(a => a.dominio === this.dominioAuto.toUpperCase());
    if (auto) {
      this.nombreAuto = auto.marca + ' ' + auto.modelo;
      this.mensajeError = '';
    } else {
      this.nombreAuto = '';
      this.mensajeError = 'Auto no encontrado.';
    }
  }

  guardarReserva(): void {
    this.mensajeError = '';
    this.mensajeExito = '';

    // Validar fechas
    const inicio = new Date(this.fechaInicio);
    const fin = new Date(this.fechaFin);

    if (isNaN(inicio.getTime()) || isNaN(fin.getTime())) {
      this.mensajeError = 'Las fechas ingresadas no son válidas.';
      return;
    }

    if (inicio >= fin) {
      this.mensajeError = 'La fecha de inicio debe ser anterior a la fecha de fin.';
      return;
    }

    // Validar conflicto de reservas
    this.http.get<any[]>('http://localhost:8080/getreservas').subscribe(reservas => {
      const conflicto = reservas.some(r =>
        r.dominioAuto === this.dominioAuto.toUpperCase() &&
        ((inicio >= new Date(r.fechaInicio) && inicio < new Date(r.fechaFin)) ||
         (fin > new Date(r.fechaInicio) && fin <= new Date(r.fechaFin)) ||
         (inicio <= new Date(r.fechaInicio) && fin >= new Date(r.fechaFin)))
      );

      if (conflicto) {
        this.mensajeError = 'Ya existe una reserva para este auto en las fechas indicadas.';
        return;
      }

      // Crear JSON para enviar al backend
      const nuevaReserva = {
        cliente: { dni: this.dniCliente },  // coincide con tu entidad en backend
        auto: { dominio: this.dominioAuto.toUpperCase() },
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin
      };

      // Enviar al backend
      this.http.post('http://localhost:8080/agregarreserva', nuevaReserva).subscribe({
        next: () => {
          this.mensajeExito = 'Reserva registrada con éxito.';
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 3000);
        },
        error: err => {
          this.mensajeError = 'Error al guardar la reserva.';
          console.error(err);
        }
      });
    });
  }
}
