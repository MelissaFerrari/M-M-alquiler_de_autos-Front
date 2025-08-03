import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crear-autos',
  templateUrl: './crear-auto.component.html',
  styleUrls: ['./crear-auto.component.css']
})
export class CrearAutoComponent {

  auto = {
    dominio: '',
    marca: '',
    modelo: '',
    kilometros: '',
    alquilado: false
  };

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(
    private http: HttpClient,
    private router: Router 
  ) {}
fotoSeleccionada: File | null = null;

onFileSelected(event: any) {
  this.fotoSeleccionada = event.target.files[0];
}

subirFoto(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!this.fotoSeleccionada) {
      resolve(''); // No hay imagen
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fotoSeleccionada);

    this.http.post('http://localhost:8080/upload', formData, { responseType: 'text' })
      .subscribe({
        next: (nombreArchivo: string) => resolve(nombreArchivo),
        error: err => reject(err)
      });
  });
}

  guardarAuto(form: NgForm) {
  this.mensajeExito = '';
  this.mensajeError = '';

  if (!form.valid) {
    this.mensajeError = 'Por favor, completá correctamente todos los campos.';
    return;
  }

  this.subirFoto().then(nombreFoto => {
    const autoConFoto = { ...this.auto, foto: nombreFoto };

    this.http.post('http://localhost:8080/agregarauto', autoConFoto)
      .subscribe({
        next: res => {
          this.mensajeExito = 'Auto agregado correctamente.';
          this.auto = { dominio: '', marca: '', modelo: '', kilometros: '', alquilado: false };
          this.fotoSeleccionada = null;
          form.resetForm();

          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 4000);
        },
        error: err => {
          console.error(err);
          this.mensajeError = 'Ocurrió un error al agregar el auto. Intentá nuevamente.';
        }
      });

  }).catch(() => {
    this.mensajeError = 'Error al subir la imagen.';
  });
}

}
