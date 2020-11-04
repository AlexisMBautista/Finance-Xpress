import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CambiarNombrePage } from './cambiar-nombre';

@NgModule({
  declarations: [
    CambiarNombrePage,
  ],
  imports: [
    IonicPageModule.forChild(CambiarNombrePage),
  ],
})
export class CambiarNombrePageModule {}
