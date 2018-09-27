import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DcomPage } from '../dcom/dcom';

/**
 * Generated class for the CompañiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-compañia',
  templateUrl: 'compañia.html',
})
export class CompañiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompañiaPage');
  }
  irDirec(){

    this.navCtrl.push(DcomPage);
  }

}
