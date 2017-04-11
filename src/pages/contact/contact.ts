import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	name: string;
  constructor(public navCtrl: NavController, private alertController: AlertController) {
  	
    }
    showName() {
        console.log(this.name);
        /*let alert = this.alertController.create({
            title: 'Hello ' + this.name + '!',
            buttons: ['OK']
        });
        alert.present();*/
  }

}
