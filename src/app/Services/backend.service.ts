import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private apiAuto = 'http://localhost:8080/getautos';
  private apiCliente = 'http://localhost:8080/getclientes';
  private apiReserva = 'http://localhost:8080/getreservas';
  
  

constructor(private http: HttpClient) {}

 getautos() {
    return this.http.get(this.apiAuto);
  }
  
  getclientes() {
    return this.http.get(this.apiCliente);
  }

  modificarCliente(dni: string, campo: string, nuevoValor: string): Observable<any> {
  return this.http.patch(`http://localhost:8080/clientes/${dni}`, {
   [campo]: nuevoValor
  });
  }

  
  getreservas() {
    return this.http.get(this.apiReserva);
  }

eliminarReserva(id: number): Observable<any> {
  return this.http.delete(`http://localhost:8080/eliminarreserva?id=${id}`, { responseType: 'text' });
}
estaDominioReservado(dominio: string) {
  return this.http.get<boolean>(`http://localhost:8080/dominio-reservado?dominio=${dominio}`);
}

modificarReserva(id: number, campo: string, nuevoValor: string): Observable<any> {
  return this.http.patch(`http://localhost:8080/reservas/${id}`, {
    [campo]: nuevoValor
  });
}



 getAutoPorDominio(dominio: string) {
  return this.http.get<any>(`http://localhost:8080/getauto?dominio=${dominio}`);
}

  modificarAuto(dominio: string, campo: string, nuevoValor: string): Observable<any> {
  return this.http.patch(`http://localhost:8080/autos/${dominio}`, {
    [campo]: nuevoValor
  });
}


eliminarAuto(dominio: string) {
  return this.http.delete(`http://localhost:8080/eliminarauto?dominio=${dominio}`, { responseType: 'text' });
}

eliminarCliente(dni: string) {
  return this.http.delete(`http://localhost:8080/eliminarcliente?dni=${dni}`, { responseType: 'text' });
}
estaClienteReservado(dni: string): Observable<boolean> {
  return this.http.get<boolean>(`http://localhost:8080/cliente-reservado?dni=${dni}`);
}


}
