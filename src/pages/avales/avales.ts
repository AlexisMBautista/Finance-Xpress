import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InformacionavalPage} from '../informacionaval/informacionaval';
import {ServiceAvalesProvider} from '../../providers/service-avales/service-avales';
import { variable } from '@angular/compiler/src/output/output_ast';
import{LoginPage} from '../../pages/login/login';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AvalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */ 

@IonicPage()
@Component({ 
  selector: 'page-avales', 
  templateUrl: 'avales.html', 
})
export class AvalesPage {
  list:any = [];
  variable= null; 

  constructor(public nav: NavController, public navParams: NavParams,
              public serviceAvales:ServiceAvalesProvider,public toastCtrl: ToastController) {
                this.variable=localStorage.getItem("id");
      this.loadAvales(this.variable);
  }

  comprobarAut(){
    if(this.variable= null){
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

  loadAvales(usuario){ 
    return new Promise(resolve => {
      this.serviceAvales.getAvales(usuario).subscribe(results => {
        console.log(results);
        this.list = results['avales']; 
        
        return resolve(); 
      })
    }).catch(err => {
      console.log(err);
    })
   } 


irAVistaInformacion(url){
    this.nav.push(InformacionavalPage, {'idAval':url});
}


}


