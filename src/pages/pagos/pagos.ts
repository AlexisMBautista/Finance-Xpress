import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClientesPage} from '../clientes/clientes';
import {ServiceClientesProvider} from '../../providers/service-clientes/service-clientes';
import { AlertController } from 'ionic-angular';
import{LoginPage} from '../../pages/login/login';
import { ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the PagosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
})
export class PagosPage {
  public list:any = [];
  public select:any;
  variable= null;
  verificador:any;
  private form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public serviceClientes:ServiceClientesProvider,
              public alertCtrl: AlertController, public toastCtrl: ToastController, private formBuilder: FormBuilder) {
    this.select = this.navParams.get('idCliente');
    console.log(this.select);
    this.verificador = this.navParams.get('cantidadAPagar');
    console.log(this.verificador);
    this.variable= localStorage.getItem('id');
    this.loadCliente(this.variable,this.select);
/*
    this.form=this.formBuilder.group({
      pagoC: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(5),Validators.pattern("[0-9]{1,5}")]]
    });
    */
    
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
    console.log('ionViewDidLoad PagosPage');
  }

  regresar(){
    this.navCtrl.setRoot(ClientesPage);
  }

  
  loadCliente(v1,v2){
    
      return new Promise(resolve => {
        this.serviceClientes.getClientesId(v1,v2).subscribe(results => {
          console.log(results);
          this.list = results['clientes'][0];
          return resolve();
        })
      }).catch(err => { 
        console.log(err); 
      })
    
    
  }
   


  insertarPagos(cliente){
    if(this.list.cantidadAPagar){

    }
    
    console.log(this.verificador);
    if(this.verificador!="0.00"){
      this.serviceClientes.pagos(cliente); 
      console.log(cliente);
      this.alertPago();
    }else if(this.verificador="0.00"){
       this.alertPago2();
    }
    
  }


  alertPago() {
    const confirm = this.alertCtrl.create({
      title: '¡Hecho!',
      message: 'El pago se ha realizado',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.setRoot(ClientesPage);
          }
        }
      ]
    });
    confirm.present();
  }

  alertPago2() {
    const confirm = this.alertCtrl.create({
      message: 'El cliente ya ah completado el pago',
      buttons: [
        {
          text: 'Aceptar'
         
        }
      ]
    });
    confirm.present();
  }
  

}
