import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams, AlertController } from 'ionic-angular';
import { EventmodalPage} from '../eventmodal/eventmodal';
import * as moment from 'moment';

/**
 * Generated class for the DssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dss',
  templateUrl: 'dss.html',
})
export class DssPage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DssPage');
  }

  addEvent() {
    let modal = this.modalCtrl.create(EventmodalPage, {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {

        let eventData = data;
        
        eventData.startTime = new Date(data.startTime);
        eventData.endTime   = new Date(data.endTime);
 
        let events = this.eventSource;
        
        events.push(eventData);
        console.log(events);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
    console.log('onEventSelected(event)');
    console.log(event);
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
    console.log('onTimeSelected(ev)');
  }
}
