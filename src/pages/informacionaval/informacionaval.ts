import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceAvalesProvider} from '../../providers/service-avales/service-avales';
import{LoginPage} from '../../pages/login/login';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-informacionaval',
  templateUrl: 'informacionaval.html',
}) 
export class InformacionavalPage {
  public list:any = [];
  public select:any ; 
  variable = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,  
              public serviceAvales:ServiceAvalesProvider, public toastCtrl: ToastController) {
    this.list = this.navParams.get('idAval');
    console.log(this.list);

    this.variable = localStorage.getItem("id");
    this.loadAvales(this.variable,this.list);

  } 

  comprobarAut(){
    if(this.variable= null){
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
    console.log('ionViewDidLoad InformacionavalPage');
  }


  loadAvales(v1, v2){
    return new Promise(resolve => {
      this.serviceAvales.getAvalesId(v1,v2).subscribe(results => {
        console.log(results);
        this.list = results['avales'][0];
       console.log(results['avales'][0]);
        return resolve();
      }) 
    }).catch(err => {
      console.log(err); 
    })
   }
   

}
