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


  getValidade(rac){
  
      let realizado =  new Date(rac.DataConclusao);
      let durancao = rac.TreinamentoRac.Validade;
      realizado.setFullYear(realizado.getFullYear() + durancao);
      return realizado;

  }

  getCor(rac){
    let start =  new Date();
    let stop  = this.getValidade(rac);
    if( (this.getDias(start, stop) > 20) )
        return false;
    else
        return true;
  }

  getDias(start, stop){ 

    var msecPerMinute = 1000 * 60;  
    var msecPerHour = msecPerMinute * 60;  
    var msecPerDay = msecPerHour * 24;  

    let interval =  stop.getTime() - start.getTime();

    var days = Math.floor(interval/msecPerDay);  
    interval = interval - (days*msecPerDay);  
    
    // Display the result.  
    return (days);  
    
   }

   getVaiExpirarEm(rac){

    let start =  new Date();
    let stop  = this.getValidade(rac);

    var msecPerMinute = 1000 * 60;  
    var msecPerHour = msecPerMinute * 60;  
    var msecPerDay = msecPerHour * 24;  

    let interval =  stop.getTime()-start.getTime();

    var days = Math.floor(interval / msecPerDay );  
    interval = interval - (days * msecPerDay );  
    
    // Calculate the hours, minutes, and seconds.  
    var hours = Math.floor(interval / msecPerHour );  
    interval = interval - (hours * msecPerHour );  
    
    var minutes = Math.floor(interval / msecPerMinute );  
    interval = interval - (minutes * msecPerMinute );  
    
    
    // Display the result.  
    return String(days + " Dias, " + hours + " Horas  e " + minutes + " Minutos ");  
    
   }

}
