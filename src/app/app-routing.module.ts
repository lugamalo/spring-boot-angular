import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent} from '../listado-clientes/listado-clientes.component';
import { FormularioClienteComponent } from '../formulario-cliente/formulario-cliente.component';


const routes: Routes = [
 { path: 'clientes', component: ListadoClientesComponent },
 { path: 'saveCliente', component: FormularioClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
