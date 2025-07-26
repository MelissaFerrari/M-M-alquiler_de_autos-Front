import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-reserva',
  templateUrl: './eliminar-reserva.component.html',
  styleUrls: ['./eliminar-reserva.component.css']
})
export class EliminarReservaComponent {
  idReserva: number | null = null;
  mensaje: string = '';
  exito: boolean = false;

  constructor(private backend: BackendService, private router: Router) {}

  eliminarReserva() {
    if (this.idReserva === null || this.idReserva <= 0) {
      this.mensaje = 'Debe ingresar un ID de reserva válido.';
      this.exito = false;
      return;
    }

    this.backend.eliminarReserva(this.idReserva).subscribe({
      next: (respuesta: any) => {
        this.mensaje = 'Reserva eliminada correctamente.';
        this.exito = true;
        setTimeout(() => this.router.navigate(['/home']), 4000);
      },
      error: (error) => {
        this.mensaje = 'No se encontró una reserva con ese ID.';
        this.exito = false;
        setTimeout(() => this.router.navigate(['/home']), 4000);
      }
    });
  }
}
