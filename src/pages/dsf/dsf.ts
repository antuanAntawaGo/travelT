import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';


@Component({
  selector: 'page-dsf',
  templateUrl: 'dsf.html',
})
export class DsfPage {
  public map: any = {};
  location:any={};
  lat: number;
  lng: number;
  public origin: {}
  public destination: {}

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DsfPage');
  }
  geo(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => { 
      // resp.coords.latitude
      // resp.coords.longitude
      
      this.location=geoposition;
      
      this.lat=geoposition.coords.latitude;
      this.lng=geoposition.coords.longitude;
      
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
  ngAfterViewInit(){
    this.geo();
  }
  ngOnInit() {
    this.getDirection()
  }
   
  getDirection() {
    this.origin = { lat:-0.1695744 , lng: -78.5031168 }
    this.destination = { lat: -0.220408, lng: -78.515304 }
    
   
    
  }

}
