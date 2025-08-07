import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {
  clientes: any[] = [];
  sinClientes: boolean = false;

  constructor(
    private BackendService: BackendService,
    private router: Router
  ) {}

  ngOnInit() {
    this.BackendService.getclientes().subscribe(
      (data: any) => {
        console.log("hasta aca llego", data);

        if (Array.isArray(data)) {
          this.clientes = data;

          if (this.clientes.length === 0) {
            this.sinClientes = true;
          }

        } else {
          console.error('La respuesta no es un array:', data);
          this.sinClientes = true;
        }
      },
      error => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }
}
