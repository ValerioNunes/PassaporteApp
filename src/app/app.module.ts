import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { ConfigPage } from '../pages/config/config';
import { RestProvider } from '../providers/rest/rest';
import { NgCalendarModule  } from 'ionic2-calendar';
import {DssPage} from '../pages/dss/dss';
import { EventmodalPage} from '../pages/eventmodal/eventmodal';
import { QrPage} from '../pages/qr/qr';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ConfigPage,
    DssPage,
    EventmodalPage,
    QrPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ConfigPage,
    DssPage,
    EventmodalPage,
    QrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    BarcodeScanner
  ],  
})
export class AppModule {}
