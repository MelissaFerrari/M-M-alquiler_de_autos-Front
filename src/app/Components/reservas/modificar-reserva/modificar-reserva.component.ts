import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent {

  idReserva: number | null = null; // ID de la reserva, clave primaria
  atributo: string = ''; // dni_cliente, dominio_auto, fecha_inicio, fecha_fin
  nuevoValor: string = '';
  mensaje: string = '';
  error: boolean = false;

  constructor(private BackendService: BackendService, private router: Router) {}

  modificarReserva() {
    if (this.idReserva === null || !this.atributo || !this.nuevoValor) {
      this.mensaje = 'Por favor, completá todos los campos.';
      this.error = true;
      return;
    }

    if (this.atributo === 'id') {
      this.mensaje = 'No se puede modificar el ID de la reserva.';
      this.error = true;
      return;
    }

    this.BackendService.modificarReserva(this.idReserva, this.atributo, this.nuevoValor)
      .subscribe({
        next: (res: any) => {
          console.log('Respuesta:', res);
          this.mensaje = 'Reserva modificada correctamente.';
          setTimeout(() => this.router.navigate(['/home']), 2000);
          this.error = false;
        },
        error: (err: any) => {
          console.error('Error:', err);
          this.mensaje = 'Ocurrió un error al modificar la reserva.';
          this.error = true;
        }
      });
  }
}
