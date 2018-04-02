import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the EventmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventmodal',
  templateUrl: 'eventmodal.html',
})
export class EventmodalPage {


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventmodalPage');
  }

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString(); // [min]="minDate"
 
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.event);
  }
}
