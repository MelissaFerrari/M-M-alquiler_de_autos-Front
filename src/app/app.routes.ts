import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./Components/home/home.component";

import { VehiculosComponent } from "./Components/vehiculos/vehiculos.component";
import { VerAutosComponent } from './Components/vehiculos/ver-autos/ver-autos.component';
import { CrearAutoComponent } from './Components/vehiculos/crear-auto/crear-auto.component';
import { EliminarAutoComponent } from './Components/vehiculos/eliminar-auto/eliminar-auto.component';
import { ModificarAutoComponent } from './Components/vehiculos/modificar-auto/modificar-auto.component';

import { ClientesComponent } from "./Components/clientes/clientes.component";
import { VerClientesComponent } from './Components/clientes/ver-clientes/ver-clientes.component';
import { CrearClienteComponent } from './Components/clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './Components/clientes/eliminar-cliente/eliminar-cliente.component';
import { ModificarClienteComponent } from './Components/clientes/modificar-cliente/modificar-cliente.component';

import { ReservasComponent } from "./Components/reservas/reservas.component";
import { VerReservasComponent } from './Components/reservas/ver-reservas/ver-reservas.component';
import { CrearReservaComponent } from './Components/reservas/crear-reserva/crear-reserva.component';
import { EliminarReservaComponent } from './Components/reservas/eliminar-reserva/eliminar-reserva.component';
import { ModificarReservaComponent } from './Components/reservas/modificar-reserva/modificar-reserva.component';


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
    { path: 'clientes', component: ClientesComponent,
        children: [
            { path: 'ver', component: VerClientesComponent },
            { path: 'crear', component: CrearClienteComponent },
            { path: 'eliminar', component: EliminarClienteComponent },
            { path: 'modificar', component: ModificarClienteComponent },
            { path: '', redirectTo: 'ver', pathMatch: 'full' }
        ]
     },
    { path: 'reservas', component: ReservasComponent,
        children: [
            { path: 'ver', component: VerReservasComponent },
            { path: 'crear', component: CrearReservaComponent },
            { path: 'eliminar', component: EliminarReservaComponent },
            { path: 'modificar', component: ModificarReservaComponent },
            { path: '', redirectTo: 'ver', pathMatch: 'full' }
        ]        
    },    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);