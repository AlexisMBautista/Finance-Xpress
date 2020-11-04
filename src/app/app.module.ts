import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard'; 
import { ActivityService } from "../services/activity-service";
import { TripService } from "../services/trip-service";
import { WeatherProvider } from "../services/weather";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { CambiarNombrePage } from "../pages/cambiar-nombre/cambiar-nombre";
import { CambiarContraseniaPage } from "../pages/cambiar-contrasenia/cambiar-contrasenia";
import { ClientesPage } from "../pages/clientes/clientes";
import { InformacionPage } from '../pages/informacion/informacion';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { AvalesPage } from '../pages/avales/avales';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { AcercaPage } from '../pages/acerca/acerca';
import { InformacionavalPage } from '../pages/informacionaval/informacionaval';
import { PagosPage } from '../pages/pagos/pagos'
// import services
// end import services
// end import

//importaciones de librerias

import { AngularFireDatabase } from '@angular/fire/database';
import { ServiceClientesProvider } from '../providers/service-clientes/service-clientes';
import { ServiceAvalesProvider } from '../providers/service-avales/service-avales';
import { AuthenticationProvider } from '../providers/authentication/authentication';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}

//import { AuthenticationProvider } from '../providers/authentication/authentication';

// import page
// end import pages

//configuracion de base de datos 
/*const firebaseConfig = {
  apiKey: "AIzaSyDR0vVGTV6-9LSLLjhqwPOD9Pkpv6wLlSY",
  authDomain: "finance-fcb11.firebaseapp.com",
  databaseURL: "https://finance-fcb11.firebaseio.com",
  projectId: "finance-fcb11",
  storageBucket: "finance-fcb11.appspot.com",
  messagingSenderId: "126277546402"
};*/


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    CambiarNombrePage,
    CambiarContraseniaPage,
    ClientesPage,
    InformacionPage,
    ConfiguracionPage,
    AvalesPage,
    AyudaPage,
    AcercaPage,
    InformacionavalPage,
    PagosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: 'Finance'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    CambiarNombrePage,
    CambiarContraseniaPage,
    ClientesPage, 
    InformacionPage,
    ConfiguracionPage,
    AvalesPage,
    AyudaPage,
    AcercaPage,
    InformacionavalPage,
    PagosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationProvider,//autentificacion
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireDatabase,
    ServiceClientesProvider,
    ServiceAvalesProvider
    // AuthenticationProvider

  ]
})

export class AppModule {
}
