import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DpanecilloPage } from '../dpanecillo/dpanecillo';

/**
 * Generated class for the PanecilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-panecillo',
  templateUrl: 'panecillo.html',
})
export class PanecilloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanecilloPage');
  }
  irDirec(){

    this.navCtrl.push(DpanecilloPage);
  }

}
