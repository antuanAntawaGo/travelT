import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgmCoreModule } from '@agm/core'
import { AgmDirectionModule } from 'agm-direction'
import { Geolocation} from '@ionic-native/geolocation';
import { LugaresPage } from '../pages/lugares/lugares';
import { CarolinaPage } from '../pages/carolina/carolina';
import { CompañiaPage } from '../pages/compa\u00F1ia/compa\u00F1ia';
import { MundoPage } from '../pages/mundo/mundo';
import { PanecilloPage } from '../pages/panecillo/panecillo';
import { PgrandePage } from '../pages/pgrande/pgrande';
import { RondaPage } from '../pages/ronda/ronda';
import { SfranciscoPage } from '../pages/sfrancisco/sfrancisco';
import { TelefericoPage } from '../pages/teleferico/teleferico';
import { DpanecilloPage } from '../pages/dpanecillo/dpanecillo';
import { DrondaPage } from '../pages/dronda/dronda';
import { DpgPage } from '../pages/dpg/dpg';
import { DTelePage } from '../pages/d-tele/d-tele';
import { DcomPage } from '../pages/dcom/dcom';
import { DmdPage } from '../pages/dmd/dmd';
import { DcaroPage } from '../pages/dcaro/dcaro';
import { DsfPage } from '../pages/dsf/dsf';

@NgModule({
  declarations: [
    MyApp,
    LugaresPage,
    CarolinaPage,
    CompañiaPage,
    MundoPage,
    PanecilloPage,
    PgrandePage,
    RondaPage,
    SfranciscoPage,
    TelefericoPage,
    DpanecilloPage,
    HomePage,
    DrondaPage,
    DpgPage,
    DTelePage,
    DcomPage,
    DmdPage,
    DcaroPage,
    DsfPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM',
    }),
    AgmDirectionModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LugaresPage,
    CarolinaPage,
    CompañiaPage,
    MundoPage,
    PanecilloPage,
    PgrandePage,
    RondaPage,
    SfranciscoPage,
    TelefericoPage,
    DpanecilloPage,
    HomePage,
    DrondaPage,
    DpgPage,
    DTelePage,
    DcomPage,
    DmdPage,
    DcaroPage,
    DsfPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
