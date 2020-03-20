import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListadoClientesComponent } from '../listado-clientes/listado-clientes.component';
import { FormularioClienteComponent } from '../formulario-cliente/formulario-cliente.component';
import { ClienteService } from '../service/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoClientesComponent,
    FormularioClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
