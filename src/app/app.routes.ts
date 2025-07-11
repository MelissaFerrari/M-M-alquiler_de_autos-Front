import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./Components/home/home.component";

import { VehiculosComponent } from "./Components/vehiculos/vehiculos.component";
import { VerAutosComponent } from './Components/vehiculos/ver-autos/ver-autos.component';
import { CrearAutoComponent } from './Components/vehiculos/crear-auto/crear-auto.component';
import { EliminarAutoComponent } from './Components/vehiculos/eliminar-auto/eliminar-auto.component';
import { ModificarAutoComponent } from './Components/vehiculos/modificar-auto/modificar-auto.component';

import { ClientesComponent } from "./Components/clientes/clientes.component";
import { ReservasComponent } from "./Components/reservas/reservas.component";

const APP_ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'vehiculos', component: VehiculosComponent,
        children: [
            { path: 'ver', component: VerAutosComponent },
            { path: 'crear', component: CrearAutoComponent },
            { path: 'eliminar', component: EliminarAutoComponent },
            { path: 'modificar', component: ModificarAutoComponent },
            { path: '', redirectTo: 'ver', pathMatch: 'full' }
        ]
    },
    { path: 'clientes', component: ClientesComponent },
    { path: 'reservas', component: ReservasComponent},    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);