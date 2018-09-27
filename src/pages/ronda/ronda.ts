import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DrondaPage } from '../dronda/dronda';

/**
 * Generated class for the RondaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ronda',
  templateUrl: 'ronda.html',
})
export class RondaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RondaPage');
  }
  irDirec(){

    this.navCtrl.push(DrondaPage);
  }

}
