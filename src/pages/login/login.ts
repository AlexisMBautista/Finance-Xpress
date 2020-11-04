import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
//import {AuthenticationProvider} from '../../providers/authentication/authentication'; 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  llave=window.localStorage;
  agente: any = [];

  acceder : any = [{email : String , password : String}];

  constructor(public nav: NavController,public aut:AuthenticationProvider, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    localStorage.clear();
 
  }

   
  // login and go to home page
  login() {
    return this.aut.login(this.acceder.email, this.acceder.password).subscribe($result=>{
      console.log(this.acceder.email + this.acceder.password );
      console.log($result);
      if($result != false){
        this.agente=$result;
        this.agente = $result['Agencias'][0];
        console.log(this.agente);
        console.log(this.agente.idUsuario);
        console.log(this.agente.usuario);
         if((this.acceder.email = this.agente.usuario) && (this.acceder.password=this.agente.password)){
           this.llave.setItem('id', this.agente.idUsuario);
           this.llave.setItem('nombre', this.agente.usuario);
           this.nav.setRoot(HomePage);
         } else{
           this.nav.setRoot(LoginPage);
         }
        
      }else if ($result= "false"){
        this.toastAutentificacion();
      }else  {
        this.toastVacio();
      }

    })
  }

  toastAutentificacion() {
    const toast = this.toastCtrl.create({
      position: 'middle',
      message: 'Datos incorrectos',
      duration: 3000
    });
    toast.present();
  }

  toastVacio() {
    const toast = this.toastCtrl.create({
      position: 'middle',
      message: 'Ingrese su usuario y contraseña',
      duration: 3000
    });
    toast.present();
  }
  
  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }
  

}
