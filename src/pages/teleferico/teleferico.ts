import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DTelePage } from '../d-tele/d-tele';

/**
 * Generated class for the TelefericoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teleferico',
  templateUrl: 'teleferico.html',
})
export class TelefericoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelefericoPage');
  }
  irDirec(){

    this.navCtrl.push(DTelePage);
  }

}
