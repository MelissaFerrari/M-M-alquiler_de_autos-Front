import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-ver-autos',
  templateUrl: './ver-autos.component.html',
  styleUrls: ['./ver-autos.component.css']
})
export class VerAutosComponent implements OnInit{
  autos: any;
  
  constructor(private BackendService: BackendService,){
  }
  
  
  ngOnInit() {

    this.BackendService.getautos().subscribe((data: any) => {
      console.log("hasta aca llego", data);
      this.autos = data;
    }, error => {
      console.error('Error al obtener autos:', error);
    });
  }
}
