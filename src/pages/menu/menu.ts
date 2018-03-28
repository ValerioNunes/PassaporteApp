import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from './../home/home'
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

 
  pages: PageInterface[] = [{ title: 'Tab 1', pageName: 'HomePage',  icon: 'home' }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPage(page: PageInterface) {

        console.log(page);
        //this.nav.setRoot(page.pageName,  this.navParams);
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
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}

