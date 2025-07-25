import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent {

  dni: string = '';
  atributo: string = '';
  nuevoValor: string = '';
  mensaje: string = '';
  error: boolean = false;

  constructor(
    private BackendService: BackendService,
    private router: Router 
  ) {}

  modificarCliente() {
    if (!this.dni || !this.atributo || !this.nuevoValor) {
      this.mensaje = 'Por favor, completá todos los campos.';
      this.error = true;
      return;
    }

    this.BackendService.modificarCliente(this.dni, this.atributo, this.nuevoValor)
      .subscribe({
        next: (res: any) => {
          console.log('Respuesta:', res);
          this.mensaje = 'Cliente modificado correctamente.';
          this.error = false;
          setTimeout(() => this.router.navigate(['/home']), 2000);
        },
        error: (err: any) => {
          console.error('Error:', err);
          this.mensaje = 'Ocurrió un error al modificar el cliente.';
          this.error = true;
        }
      });
  }
}
