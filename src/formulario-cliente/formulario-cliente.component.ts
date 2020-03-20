import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.less']
})
export class FormularioClienteComponent {

  cliente: Cliente;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private clienteService: ClienteService) {
    this.cliente = new Cliente();
  }
  
  onSubmit() {
    this.clienteService.save(this.cliente).subscribe(result => this.gotoListadoClientes());
  }
 
  gotoListadoClientes() {
    this.router.navigate(['/clientes']);
  }
}
