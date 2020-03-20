import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesUrl: string;
 
  constructor(private http: HttpClient) {
    this.clientesUrl = 'http://localhost:8080/clientes';
  }
 
  public findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl);
  }
 
  public save(cliente: Cliente) {
    return this.http.post<Cliente>(this.clientesUrl, cliente);
  }
}
