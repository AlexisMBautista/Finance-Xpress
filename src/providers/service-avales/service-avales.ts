import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAvalesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAvalesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceAvalesProvider Provider');
  }

  getAvales(usuario){
    return this.http.get('http://localhost:8080/FinanceBD-master/avales/' + usuario);
  }

  getAvalesId(usuario,id){
    return this.http.get('http://localhost:8080/FinanceBD-master/avales/' + usuario +'/' + id);
  }
  
}
