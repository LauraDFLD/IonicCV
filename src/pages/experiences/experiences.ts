import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
  selector: 'page-experiences',
  templateUrl: 'experiences.html'
})
export class ExperiencesPage {

  public base64Image: string;

  constructor(public navCtrl: NavController) {}

}
