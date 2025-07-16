import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-auto',
  templateUrl: './form-auto.component.html',
  styleUrls: ['./form-auto.component.css']
})
export class FormAutoComponent {

  auto = {
    dominio: '',
    marca: '',
    modelo: '',
    kilometros: '',
    alquilado: false
  };

  constructor(private http: HttpClient) {}

  guardarAuto() {
    this.http.post('http://localhost:8080/agregarauto', this.auto)
.subscribe({
      next: res => {
        alert('Auto agregado correctamente');
        this.auto = { dominio: '', marca: '', modelo: '', kilometros: '', alquilado: false };
      },
      error: err => {
        console.error(err);
        alert('Error al agregar auto');
      }
    });
  }
}

