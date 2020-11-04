import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InformacionPage} from '../informacion/informacion';
import {ServiceClientesProvider} from '../../providers/service-clientes/service-clientes';
import {PagosPage} from '../pagos/pagos';
import { AlertController } from 'ionic-angular';
import{LoginPage} from '../../pages/login/login';
import { ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  list:any = [];
  esther = null;


  constructor(public nav: NavController,
              public navParams: NavParams,
              public serviceClientes:ServiceClientesProvider, 
              public alertCtrl: AlertController,public toastCtrl: ToastController) {

                this.esther=localStorage.getItem("id");
              this.loadClientes(this.esther);
  }

  comprobarAut(){
    if(this.esther= null){
      this.nav.setRoot(LoginPage);
      this.toastAut();
    }
  }

  toastAut() {
    const toast = this.toastCtrl.create({
      message: 'Inicie sesión',
      duration: 3000
    });
    toast.present();
  }



  irPagos(){
    this.nav.push (PagosPage);
  }


  //CARGAR LISTA DE CLIENTES
  loadClientes(usuario){
   return new Promise(resolve => {
     this.serviceClientes.getClientes(usuario).subscribe(results => {
       console.log(results);
       this.list = results['clientes'];
       return resolve();
     })
   }).catch(err => {
     console.log(err);
   })
  } 

 


  listClientes(usuario){
    return new Promise(resolve => {
      this.serviceClientes.getClientes(usuario).subscribe(results => {
        console.log(results);
        this.list = results['clientes'];
        console.log(this.list);
        return resolve();
      })
    }).catch(err => {
      console.log(err);
    })
   } 



ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
}

irAVistaPago(url:String,v:String){
  this.nav.push(PagosPage, {'idCliente':url,'cantidadAPagar':v});
}

deleteCliente(numTarjeta){
  this.nav.push(InformacionPage, {'noTarjeta':numTarjeta});
}

irAVistaInformacion(url){
  this.nav.push(InformacionPage, {'idCliente':url});
}

}
