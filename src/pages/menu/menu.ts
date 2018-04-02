import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from './../home/home'
import { ConfigPage } from './../config/config'
import { DssPage } from './../dss/dss'
import { QrPage} from '../../pages/qr/qr';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage:any =  HomePage;
  @ViewChild(Nav) nav: Nav;
  Frase = '';
 
  pages: PageInterface[] = [{ title: 'Meu Passaporte', pageName: 'HomePage', tabComponent: HomePage ,  icon: 'contact' },
                            { title: 'Agenda SSMA', pageName: 'DssPage', tabComponent: DssPage ,  icon: 'md-calendar' },
                            { title: 'QR', pageName: 'QrPage', tabComponent: QrPage ,  icon: 'md-barcode' },
                            { title: 'Config', pageName: 'ConfigPage', tabComponent: ConfigPage ,  icon: 'settings' },
                            ];
                            
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Frase = this.navParams.get("PassaporteView").Frase;
  }

  openPage(page: PageInterface) {

        this.nav.setRoot( page.tabComponent,  this.navParams);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return 'green';
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return 'green' ;
  }
 
}

