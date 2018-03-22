import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private Empregado: any ;
  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.Empregado =  this.navParams.get("Empregado");
    console.log(this.Empregado);
  }

}
