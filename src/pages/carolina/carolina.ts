import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DcaroPage } from '../dcaro/dcaro';

/**
 * Generated class for the CarolinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carolina',
  templateUrl: 'carolina.html',
})
export class CarolinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarolinaPage');
  }
  irDirec(){

    this.navCtrl.push(DcaroPage);
  }

}
