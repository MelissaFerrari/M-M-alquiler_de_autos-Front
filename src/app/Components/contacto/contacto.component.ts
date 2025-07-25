import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  error: string = '';
  exito: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  validarEmail(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  enviarMensaje(): void {
    this.error = '';
    this.exito = '';

    if (!this.nombre || !this.correo || !this.mensaje) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }

    if (!this.validarEmail(this.correo)) {
      this.error = 'El correo electrónico no es válido.';
      return;
    }

    this.exito = 'Mensaje enviado correctamente.';
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
