import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

  login(usuario, password){
     return this.http.get('http://localhost:8080/FinanceBD-master/loginA/' + usuario + '/' + password);
  }

  changePassword(id:any, d:any){
      return this.http.put('http://localhost:8080/FinanceBD-master/configP/'+ id +'/'+ d).subscribe(data =>{
        console.log(data);
      })
  }

  changeUser(id:any,nombre:any){
    return this.http.put('http://localhost:8080/FinanceBD-master/configU/' + id +'/'+ nombre).subscribe(data =>{
      console.log(data);
    })
  }

  getDetailsAgent(id:any){
    return this.http.get('http://localhost:8080/FinanceBD-master/agenciasDetalle/'+id);   
  }


 
}
