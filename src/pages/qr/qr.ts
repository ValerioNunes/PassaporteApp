import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {
  qrData = null;
  createdCode = null;

  serialnumber = '';
  constructor(private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPage');
  }

  createCode() {
    this.createdCode = this.qrData;
  }
  
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.serialnumber = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  getEquipamento(event){

  }

}
