import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DmdPage } from '../dmd/dmd';

/**
 * Generated class for the MundoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mundo',
  templateUrl: 'mundo.html',
})
export class MundoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MundoPage');
  }
  
  irDirec(){

    this.navCtrl.push(DmdPage);
  }

}
