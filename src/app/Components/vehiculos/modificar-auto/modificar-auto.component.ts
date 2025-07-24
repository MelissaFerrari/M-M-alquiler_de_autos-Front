import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-modificar-auto',
  templateUrl: './modificar-auto.component.html',
  styleUrls: ['./modificar-auto.component.css']
})
export class ModificarAutoComponent {

  dominio: string = ''; // Este campo es clave primaria, no se puede modificar
  atributo: string = ''; // marca, modelo, kilometros, alquilado
  nuevoValor: string = '';
  mensaje: string = '';
  error: boolean = false;

  constructor(private BackendService: BackendService) {}

  modificarAuto() {
    if (!this.dominio || !this.atributo || !this.nuevoValor) {
      this.mensaje = 'Por favor, completá todos los campos.';
      this.error = true;
      return;
    }

    if (this.atributo === 'dominio') {
      this.mensaje = 'No se puede modificar el dominio del auto.';
      this.error = true;
      return;
    }

    this.BackendService.modificarAuto(this.dominio, this.atributo, this.nuevoValor)
      .subscribe({
        next: (res: any) => {
          console.log('Respuesta:', res);
          this.mensaje = 'Auto modificado correctamente.';
          this.error = false;
        },
        error: (err: any) => {
          console.error('Error:', err);
          this.mensaje = 'Ocurrió un error al modificar el auto.';
          this.error = true;
        }
      });
  }
}


