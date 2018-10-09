import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Location } from '../../models/location';

 @IonicPage()
 @Component({
 	selector: 'page-set-location',
 	templateUrl: 'set-location.html',
 })
 export class SetLocationPage implements OnInit {
 	location: Location;
 	marker: Location;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SetLocationPage');
 	}
 		
 	ngOnInit() {
 		
 		this.location = this.navParams.get('location');
 		if (this.navParams.get('isSet')){
 			this.marker = this.location;
 		}
 	}	

 	onSetMarker(event: any) {
 		console.log(event);
 		this.marker = new Location(event.coords.lat, event.coords.lng);
 	}

 	onConfirm(){
 		this.viewCtrl.dismiss({location: this.marker});
 	}

 	onAbort(){
 		this.viewCtrl.dismiss();
 	}

 	public styles =
 	[
 	{
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#f5f5f5"
 		}
 		]
 	},
 	{
 		"elementType": "labels.icon",
 		"stylers": [
 		{
 			"visibility": "off"
 		}
 		]
 	},
 	{
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#616161"
 		}
 		]
 	},
 	{
 		"elementType": "labels.text.stroke",
 		"stylers": [
 		{
 			"color": "#f5f5f5"
 		}
 		]
 	},
 	{
 		"featureType": "administrative.land_parcel",
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#bdbdbd"
 		}
 		]
 	},
 	{
 		"featureType": "poi",
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#eeeeee"
 		}
 		]
 	},
 	{
 		"featureType": "poi",
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#757575"
 		}
 		]
 	},
 	{
 		"featureType": "poi.park",
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#e5e5e5"
 		}
 		]
 	},
 	{
 		"featureType": "poi.park",
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#9e9e9e"
 		}
 		]
 	},
 	{
 		"featureType": "road",
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#ffffff"
 		}
 		]
 	},
 	{
 		"featureType": "road.arterial",
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#757575"
 		}
 		]
 	},
 	{
 		"featureType": "road.highway",
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#dadada"
 		}
 		]
 	},
 	{
 		"featureType": "road.highway",
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#616161"
 		}
 		]
 	},
 	{
 		"featureType": "road.local",
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#9e9e9e"
 		}
 		]
 	},
 	{
 		"featureType": "transit.line",
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#e5e5e5"
 		}
 		]
 	},
 	{
 		"featureType": "transit.station",
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#eeeeee"
 		}
 		]
 	},
 	{
 		"featureType": "water",
 		"elementType": "geometry",
 		"stylers": [
 		{
 			"color": "#c9c9c9"
 		}
 		]
 	},
 	{
 		"featureType": "water",
 		"elementType": "labels.text.fill",
 		"stylers": [
 		{
 			"color": "#9e9e9e"
 		}
 		]
 	}
 	]

 }
