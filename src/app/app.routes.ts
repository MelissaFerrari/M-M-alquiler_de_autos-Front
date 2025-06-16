import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./Components/home/home.component";
import { VehiculosComponent } from "./Components/vehiculos/vehiculos.component";
import { ClientesComponent } from "./Components/clientes/clientes.component";


const APP_ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);