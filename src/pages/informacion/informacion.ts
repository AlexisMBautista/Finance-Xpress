import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceClientesProvider} from '../../providers/service-clientes/service-clientes';
import{LoginPage} from '../../pages/login/login';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage{
   public list:any = [];
 
  public select:any; 
  esther = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
             public serviceClientes:ServiceClientesProvider,public toastCtrl: ToastController) {
    this.select = this.navParams.get('idCliente');
    this.esther = localStorage.getItem("id");
    //console.log(this.loadClientes2(this.select));
    this.loadClientes2(this.esther, this.select);
    console.log(this.select);
  	console.log(this.list);
  }

  comprobarAut(){
    if(this.esther= null){
      this.navCtrl.setRoot(LoginPage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  loadClientes2(ids, id){
    return new Promise(resolve => {
      this.serviceClientes.getClientesId(ids, id).subscribe(results => {
        console.log(results);
        this.list = results['clientes'][0];
       //console.log(results['clientes'][0].clienteNombre);
        return resolve();
      })
    }).catch(err => {
      console.log(err); 
    })
   }

  


   
   

}
