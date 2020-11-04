import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather"; 
import { ClientesPage } from "../pages/clientes/clientes";
import {AvalesPage} from '../pages/avales/avales';
import {AyudaPage} from '../pages/ayuda/ayuda';
import {ConfiguracionPage} from '../pages/configuracion/configuracion';
import { AcercaPage } from "../pages/acerca/acerca";
import { TranslateService } from '@ngx-translate/core'; 
import { timer } from 'rxjs/observable/timer';  



export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;
  menuItem; 

  showSplash = true;
  nombre:any;


  constructor(
    private translateService: TranslateService,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      timer(3000).subscribe(()=>{
        this.showSplash =false;
      });

      this.translateService.setDefaultLang('es');
      this.translateService.use('es');
      
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      this.nombre = localStorage.getItem('nombre');
      console.log("user1 " + this.nombre);
    });
  }

  openHome(){
    this.nav.setRoot(HomePage);
  }

  openPerfil(){
      this.nav.setRoot(LocalWeatherPage);
  }

  openCliente(){
    this.nav.setRoot(ClientesPage);
  } 

  openAvales(){
    this.nav.setRoot(AvalesPage);
  }

  openConfiguracion(){
    this.nav.setRoot(ConfiguracionPage);
  }

  openAyuda(){
    this.nav.setRoot(AyudaPage);
  }
  openAcercaDe(){
    this.nav.setRoot(AcercaPage);
  } 
   openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }

}
