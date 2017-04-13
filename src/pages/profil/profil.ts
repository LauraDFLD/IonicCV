import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
//import {DomSanitizationService} from '@angular/platform-browser';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  public base64Image: string;
  cameraData: string;
  photoTaken: boolean;
  cameraUrl: string;
  photoSelected: boolean;

  constructor(public navCtrl: NavController) {
    this.photoTaken = false;
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  selectFromGallery(){
    var options = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL
    };
    Camera.getPicture(options).then((imageData) => {
      /*this.cameraUrl = imageData;
      this.photoSelected = true;
      this.photoTaken = false;*/
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  }              


