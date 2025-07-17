import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-ver-reservas',
  templateUrl: './ver-reservas.component.html',
  styleUrls: ['./ver-reservas.component.css']
})

export class VerReservasComponent implements OnInit{
  reservas: any;
  
  constructor(private BackendService: BackendService,){
  }
  
  
  ngOnInit() {

    this.BackendService.getreservas().subscribe((data: any) => {
      console.log("hasta aca llego", data);
      this.reservas = data;
    }, error => {
      console.error('Error al obtener reservas:', error);
    });
  }
}
