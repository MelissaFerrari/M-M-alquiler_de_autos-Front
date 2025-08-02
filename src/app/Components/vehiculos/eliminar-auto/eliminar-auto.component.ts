import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-auto',
  templateUrl: './eliminar-auto.component.html',
  styleUrls: ['./eliminar-auto.component.css']
})
export class EliminarAutoComponent {
  dominio: string = '';
  mensaje: string = '';
  error: boolean = false;

  constructor(private autoService: BackendService, private router: Router) {}

  eliminarAuto() {
    const dominioValido = /^[A-Z]{3}[0-9]{3}$/i.test(this.dominio);

    if (!dominioValido) {
      this.mensaje = 'El dominio ingresado no es válido. Debe tener tres letras y tres números (ej: ABC123).';
      this.error = true;
      return;
    }

    this.autoService.getAutoPorDominio(this.dominio).subscribe({
      next: auto => {
        if (!auto) {
          this.mensaje = 'El dominio ingresado no se encuentra registrado en el sistema.';
          this.error = true;
          return;
        }

        this.autoService.estaDominioReservado(this.dominio).subscribe({
          next: reservado => {
            if (reservado) {
              this.mensaje = 'ATENCIÓN: el dominio ingresado está registrado en una reserva.';
              this.error = true;
            } else {
              this.autoService.eliminarAuto(this.dominio).subscribe({
                next: () => {
                  this.mensaje = 'Auto eliminado correctamente.';
                  this.error = false;
                  setTimeout(() => this.router.navigate(['/']), 2000);
                },
                error: err => {
                  console.log('Error en eliminación:', err);
                  this.mensaje = 'Ocurrió un error al intentar eliminar el auto.';
                  this.error = true;
                }
              });
            }
          },
          error: err => {
            console.log('Error al verificar reserva:', err);
            this.mensaje = 'Ocurrió un error al verificar las reservas.';
            this.error = true;
          }
        });
      },
      error: err => {
        console.log('Error al buscar auto:', err);
        this.mensaje = 'Error al buscar el auto.';
        this.error = true;
      }
    });
  }
}
