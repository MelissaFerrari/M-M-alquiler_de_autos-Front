import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  nuevoCliente = {
    dni: '',
    nombreCompleto: '',
    direccion: '',
    telefono: ''
  };

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private http: HttpClient) {}

  guardarCliente(form: NgForm) {
    this.mensajeExito = '';
    this.mensajeError = '';

    if (!form.valid) {
      this.mensajeError = 'Por favor, completá todos los campos correctamente.';
      return;
    }

    const dniValido = /^[0-9]{8}$/.test(this.nuevoCliente.dni) && Number(this.nuevoCliente.dni) > 0;
    if (!dniValido) {
      this.mensajeError = 'El DNI debe tener exactamente 8 dígitos numéricos y ser mayor a 0.';
      return;
    }

    this.http.post('http://localhost:8080/agregarcliente', this.nuevoCliente).subscribe({
      next: res => {
        this.mensajeExito = 'Cliente agregado correctamente.';
        this.nuevoCliente = { dni: '', nombreCompleto: '', direccion: '', telefono: '' };
        form.resetForm();
      },
      error: err => {
        console.error(err);
        this.mensajeError = 'Ocurrió un error al agregar el cliente. Intentá nuevamente.';
      }
    });
  }
}
