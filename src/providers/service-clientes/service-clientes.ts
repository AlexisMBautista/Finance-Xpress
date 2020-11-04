import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceClientesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceClientesProvider Provider');
  }

  getClientes(usuario){
    return this.http.get('http://localhost:8080/FinanceBD-master/clientes/' + usuario);
  }

  getClientesId(usuario, id){
    return this.http.get('http://localhost:8080/FinanceBD-master/clientes/' + usuario +'/' + id);
  }

  pagos(idCliente: any){
    return this.http.put('http://localhost:8080/FinanceBD-master/clientesP',idCliente).subscribe((data) =>{
      console.log(data);
    }) ;

  }

  


}
