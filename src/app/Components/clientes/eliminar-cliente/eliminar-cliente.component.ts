import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent {
  dni: string = '';
  mensaje: string = '';
  exito: boolean = false;

  constructor(private backend: BackendService, private router: Router) {}

  eliminarCliente() {
    if (!/^\d{8}$/.test(this.dni)) {
      this.mensaje = 'El DNI debe tener exactamente 8 dígitos numéricos.';
      this.exito = false;
      return;
    }

    // Verifica si tiene reservas
    this.backend.estaClienteReservado(this.dni).subscribe({
      next: reservado => {
        if (reservado) {
          this.mensaje = 'El cliente que se quiere eliminar, tiene reservas registradas.';
          this.exito = false;
        } else {
          this.backend.eliminarCliente(this.dni).subscribe({
            next: () => {
              this.mensaje = 'Cliente eliminado correctamente.';
              this.exito = true;
              setTimeout(() => this.router.navigate(['/home']), 4000);
            },
            error: () => {
              this.mensaje = 'No se encontró un cliente con ese DNI.';
              this.exito = false;
              setTimeout(() => this.router.navigate(['/home']), 4000);
            }
          });
        }
      },
      error: () => {
        this.mensaje = 'Error al verificar si el cliente tiene reservas.';
        this.exito = false;
      }
    });
  }
}
