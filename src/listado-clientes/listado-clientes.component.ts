import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.less']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[];
 
  constructor(private clienteService: ClienteService) {
  }
  
  ngOnInit() {
  	this.clienteService.findAll().subscribe(data => {
      this.clientes = data;
    });
  }

}
