import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private apiAuto = 'http://localhost:8080/getautos';
  private apiCliente = 'http://localhost:8080/getclientes';
  private apiReserva = 'http://localhost:8080/getreservas';
  
  
  //private apiCabania = 'http://localhost:8000/api/cabania'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

 getautos() {
    return this.http.get(this.apiAuto);
  }
  
  getclientes() {
    return this.http.get(this.apiCliente);
  }

  getreservas() {
    return this.http.get(this.apiReserva);
  }
  

}
