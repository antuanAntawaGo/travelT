import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';


@Component({
  selector: 'page-dpanecillo',
  templateUrl: 'dpanecillo.html',
})
export class DpanecilloPage {
  public map: any = {};
  location:any={};
  lat: number;
  lng: number;
  public origin: {}
  public destination: {}

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DpanecilloPage');
  }
  geo(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => { 
      // resp.coords.latitude
      // resp.coords.longitude
      
      this.location=geoposition;
      
      this.lat=geoposition.coords.latitude;
      this.lng=geoposition.coords.longitude;
      console.log(geoposition);
     }
     
    )
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
     console.log("whatch",data.coords)
     this.lat=data.coords.latitude;
      this.lng=data.coords.longitude;


    });
  }
  
  ngOnInit() {
    this.getDirection()
    
  }
   
  getDirection() {
    this.origin = { lat:-0.1695744 , lng: -78.5031168 }
    this.destination = { lat: -0.228981, lng: -78.518545 }
   
    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }
  home(){

    this.navCtrl.popToRoot();
  }

}
