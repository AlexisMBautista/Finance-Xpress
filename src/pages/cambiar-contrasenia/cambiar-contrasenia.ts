import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the CambiarContraseniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-contrasenia',
  templateUrl: 'cambiar-contrasenia.html',
})
export class CambiarContraseniaPage {
    list:any=[];

  constructor(public authenticationProvider:AuthenticationProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.list.id = this.navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarContraseniaPage');
  }

  public cambiarContrasenia(){
    this.list.id = this.navParams.get("id");
    this.authenticationProvider.changePassword(this.list.id,this.list.d);
  }

  



}
