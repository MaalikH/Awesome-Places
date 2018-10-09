import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';

@IonicPage()
@Component({
	selector: 'page-add-place',
	templateUrl: 'add-place.html',
})
export class AddPlacePage {
	location: Location = {
		lat: 33.7562,
		lng: -84.3906887
	}

	locationIsSet = false

	setLocationPage = SetLocationPage;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public geoLocation: Geolocation, private toastCtrl: ToastController, private loadCtrl: LoadingController, private camera: Camera) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPlacePage');
	}

	onOpenMap() 
	{
		console.log("openMapCalled")
		const modal = this.modalCtrl.create(this.setLocationPage, {location: this.location, isSet: this.locationIsSet});
		modal.present();
		modal.onDidDismiss(
			data => {
				if (data) {
					this.location = data.location;
					this.locationIsSet = true;
					console.log(this.locationIsSet);
				}
			}
		);
	}

	onLocate() {
		const loader = this.loadCtrl.create({
			content: 'Getting your location'
		})
		loader.present();
		this.geoLocation.getCurrentPosition().then( 
			location => {
				this.location.lat = location.coords.latitude;
				this.location.lng = location.coords.longitude;
				this.locationIsSet = true;
				loader.dismiss();
				const toastSuccess = this.toastCtrl.create({
					message:"Your location was found",
					duration: 3000
				});
				toastSuccess.present();

		}).catch(
			error => {
				console.log(error)
				loader.dismiss();
				const toastDenied = this.toastCtrl.create({
					message: error.message,
					duration: 3000
				});
				toastDenied.present();
			});

	}

	onTakePhoto() {
		this.camera.getPicture({
			encodingType: this.camera.EncodingType.JPEG,
			correctOrientation: true
		}).then(
			imageData => {
				console.log(imageData);
			}
		).catch( err => {
			console.log(err);
		});
	}	
}
