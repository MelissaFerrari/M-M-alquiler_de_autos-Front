import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  
  private apiAuto = 'http://localhost:8080/getautos';
  
  
  //private apiCabania = 'http://localhost:8000/api/cabania'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

 getautos() {
    return this.http.get(this.apiAuto);
  }
  

  //getAllCabanas() {
   // return this.http.get(this.apiCabania);
  //}

}
