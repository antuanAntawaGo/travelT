import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DsfPage } from '../dsf/dsf';

/**
 * Generated class for the SfranciscoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sfrancisco',
  templateUrl: 'sfrancisco.html',
})
export class SfranciscoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SfranciscoPage');
  }
  irDirec(){

    this.navCtrl.push(DsfPage);
  }

}
