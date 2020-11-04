import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the CambiarNombrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-nombre', 
  templateUrl: 'cambiar-nombre.html', 
})
export class CambiarNombrePage { 
   list:any=[];


  constructor(public authenticationProvider:AuthenticationProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.list.id = +this.navParams.get("id");
  }

  public cambiarUsuario(){
    this.list.id = +this.navParams.get("id");
    console.log(this.list.id);
    this.authenticationProvider.changeUser(this.list.id,this.list.d);
    console.log(this.list);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarNombrePage');
  }

}
