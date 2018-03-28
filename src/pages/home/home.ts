import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private Empregado: any ;
  private HistRac: any;


  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.Empregado =  this.navParams.get("PassaporteView").Empregado;
    this.HistRac = this.navParams.get("PassaporteView").historicoRacs;
    
    console.log(this.navParams.get("PassaporteView"));
    console.log(this.Empregado);
  }

}
