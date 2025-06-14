import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  clientes: any;
  
  constructor(private BackendService: BackendService,){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  
}
