import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LugaresPage } from '../lugares/lugares';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public map: any = {};
  location:any={};
  lat: number;
  lng: number;
  
  public origin: {}
  public destination: {}
  sitios= [
    {
        lat: -0.228981, 
        lng: -78.518545,
        label: 'Virgen del Panecillo',
        
        
        
        
    },
    {
        lat: -0.220091, 
        lng: -78.512057,
        label: 'Plaza Grande',
        
        
    },
    {
        lat: -0.191965, 
        lng: -78.518907,
        label: 'Teleférico',
        
        
    },{
      lat: -0.220814, 
      lng: -78.513995,
      label: 'Iglesia de la Compañia',
      
      
  },{
    lat: -0.002310, 
    lng: -78.455740,
    label: 'Ciudad Mitad del Mundo',
    
    
},{
  lat: -0.182732, 
  lng: -78.484460,
  label: 'Parque la Carolina',
  
  
},{
  lat: -0.220408,  
  lng: -78.515304,
  label: 'Iglesia de San Francisco',
  
  
},{
  lat: -0.113516, 
  lng: -78.416192,
  label: 'La Ronda',
  
  
}
];

  constructor(public navCtrl: NavController,private geolocation: Geolocation) {

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
  
  irLugares(){

    this.navCtrl.push(LugaresPage);
  }
   
  
}
