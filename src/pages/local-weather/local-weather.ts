import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CambiarNombrePage} from '../cambiar-nombre/cambiar-nombre';
import {CambiarContraseniaPage} from '../cambiar-contrasenia/cambiar-contrasenia';



@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html'
})
export class LocalWeatherPage {
  
  idUsuario;
  nombre;

  constructor(public navCtrl: NavController) {
    

  }

  openNombre(){   
    this.idUsuario=localStorage.getItem("id");
    this.navCtrl.push(CambiarNombrePage, {'id':this.idUsuario});
  }
  
  public openPassword(){
    this.idUsuario=localStorage.getItem("id");
    this.navCtrl.push(CambiarContraseniaPage, {'id':this.idUsuario});
  }

}
