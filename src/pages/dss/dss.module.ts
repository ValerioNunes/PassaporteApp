import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DssPage } from './dss';

@NgModule({
  declarations: [
    DssPage,
  ],
  imports: [
    IonicPageModule.forChild(DssPage),
  ],
})
export class DssPageModule {}
