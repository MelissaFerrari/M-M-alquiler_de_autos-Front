import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Rutas

import { APP_ROUTING } from './app.routes';

//Servicios

//Componentes


import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { ReservasComponent } from './Components/reservas/reservas.component';
import { VerAutosComponent } from './Components/vehiculos/ver-autos/ver-autos.component';
import { CrearAutoComponent } from './Components/vehiculos/crear-auto/crear-auto.component';
import { EliminarAutoComponent } from './Components/vehiculos/eliminar-auto/eliminar-auto.component';
import { ModificarAutoComponent } from './Components/vehiculos/modificar-auto/modificar-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VehiculosComponent,
    ClientesComponent,
    FooterComponent,
    ReservasComponent,
    VerAutosComponent,
    CrearAutoComponent,
    EliminarAutoComponent,
    ModificarAutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
