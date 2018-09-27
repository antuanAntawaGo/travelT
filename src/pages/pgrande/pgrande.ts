import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DpgPage } from '../dpg/dpg';

/**
 * Generated class for the PgrandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pgrande',
  templateUrl: 'pgrande.html',
})
export class PgrandePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PgrandePage');
  }
  irDirec(){

    this.navCtrl.push(DpgPage);
  }
}
