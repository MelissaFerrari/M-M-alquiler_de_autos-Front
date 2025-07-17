import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})

export class VerClientesComponent implements OnInit{
  clientes: any;
  
  constructor(private BackendService: BackendService,){
  }
  
  
  ngOnInit() {

    this.BackendService.getclientes().subscribe((data: any) => {
      console.log("hasta aca llego", data);
      this.clientes = data;
    }, error => {
      console.error('Error al obtener clientes:', error);
    });
  }
}



