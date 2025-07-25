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
    // Validación extra de DNI
    if (!/^\d{8}$/.test(this.dni)) {
      this.mensaje = 'El DNI debe tener exactamente 8 dígitos numéricos.';
      this.exito = false;
      return;
    }

    this.backend.eliminarCliente(this.dni).subscribe({
      next: (respuesta: any) => {
        this.mensaje = 'Cliente eliminado correctamente.';
        this.exito = true;
        setTimeout(() => this.router.navigate(['/home']), 4000);
      },
      error: (error) => {
        this.mensaje = 'No se encontró un cliente con ese DNI.';
        this.exito = false;
        setTimeout(() => this.router.navigate(['/home']), 4000);
      }
    });
  }
}
