import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-reservas',
  templateUrl: './ver-reservas.component.html',
  styleUrls: ['./ver-reservas.component.css']
})
export class VerReservasComponent implements OnInit {
  reservas: any[] = [];
  sinReservas: boolean = false;

  constructor(
    private BackendService: BackendService,
    private router: Router
  ) {}

  ngOnInit() {
    this.BackendService.getreservas().subscribe(
      (data: any) => {
        if (Array.isArray(data)) {
          const hoy = new Date();

          this.reservas = data.map((reserva: any) => {
            const fechaFin = new Date(reserva.fechaFin);
            reserva.vencida = fechaFin < hoy;
            return reserva;
          });

          if (this.reservas.length === 0) {
            this.sinReservas = true;
          }

        } else {
          console.error('La respuesta no es un array:', data);
          this.sinReservas = true;
        }
      },
      error => {
        console.error('Error al obtener reservas:', error);
      }
    );
  }
}
