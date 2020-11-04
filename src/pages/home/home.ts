import { Component } from "@angular/core";
import { NavController, PopoverController, NavParams } from "ionic-angular";
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  variable: any;
  // search condition

  detailsAgent: any = [];

  nombre:any;

  constructor
    (
      public navParams: NavParams,
      private authenticationProvider: AuthenticationProvider,
      private storage: Storage,
      public nav: NavController, public popoverCtrl: PopoverController,
      public toastCtrl: ToastController
    ) {
    this.variable = localStorage.getItem('id');
    this.comprobarAut();
    this.loadDetailsAgent();
    this.nombre = localStorage.getItem('nombre');
    console.log("user " + this.nombre);
  }

  comprobarAut() {
    if (this.variable = null) {
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


  loadDetailsAgent() {
    return new Promise(resolve => {
      this.variable = localStorage.getItem('id');
      this.authenticationProvider.getDetailsAgent(this.variable).subscribe(results => {
        this.detailsAgent = results['Detalle'][0];
        console.log(this.detailsAgent);
        return resolve();
      })
    }).catch(err => {
      console.log(err);
    })
  }
}




