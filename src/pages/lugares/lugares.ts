import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PanecilloPage } from '../panecillo/panecillo';
import { RondaPage } from '../ronda/ronda';
import { PgrandePage } from '../pgrande/pgrande';
import { TelefericoPage } from '../teleferico/teleferico';
import { CompañiaPage } from '../compa\u00F1ia/compa\u00F1ia';
import { MundoPage } from '../mundo/mundo';
import { CarolinaPage } from '../carolina/carolina';
import { SfranciscoPage } from '../sfrancisco/sfrancisco';

/**
 * Generated class for the LugaresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html',
})
export class LugaresPage {
  lugares=[{nombre:"Virgen del Panecillo"},
  {nombre:"La Ronda"},
  {nombre:"Plaza Grande"},
  {nombre:"Teleférico"},
  {nombre:"Iglesia de la Compañia"},
  {nombre:"Ciudad Mitad del Mundo"},
  {nombre:"Parque la Carolina"},
  {nombre:"Iglesia de San Francisco"}

  
]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresPage');
  }
   select($event,item){
    if(item.nombre === "Virgen del Panecillo")
     this.navCtrl.push(PanecilloPage);
    if(item.nombre === "La Ronda")
     this.navCtrl.push(RondaPage);
    if(item.nombre === "Plaza Grande")
     this.navCtrl.push(PgrandePage);
     if(item.nombre === "Teleférico")
     this.navCtrl.push(TelefericoPage);
     if(item.nombre === "Iglesia de la Compañia")
     this.navCtrl.push(CompañiaPage);
     if(item.nombre === "Ciudad Mitad del Mundo")
     this.navCtrl.push(MundoPage);
     if(item.nombre === "Parque la Carolina")
     this.navCtrl.push(CarolinaPage);
     if(item.nombre === "Iglesia de San Francisco")
     this.navCtrl.push(SfranciscoPage);
    }
    }
    
    
    
    
    
    


