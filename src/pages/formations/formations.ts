import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
  selector: 'page-formations',
  templateUrl: 'formations.html'
})
export class FormationsPage {

  public base64Image: string;

  constructor(public navCtrl: NavController) {}

}
