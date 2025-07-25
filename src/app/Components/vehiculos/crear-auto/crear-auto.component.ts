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

  guardarAuto(form: NgForm) {
    this.mensajeExito = '';
    this.mensajeError = '';

    if (!form.valid) {
      this.mensajeError = 'Por favor, completá correctamente todos los campos.';
      return;
    }

    this.http.post('http://localhost:8080/agregarauto', this.auto)
      .subscribe({
        next: res => {
          this.mensajeExito = 'Auto agregado correctamente.';
          this.auto = { dominio: '', marca: '', modelo: '', kilometros: '', alquilado: false };
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
  }
}
