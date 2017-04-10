import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { TranslateService } from 'ng2-translate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, translate: TranslateService) {
  translate.setDefaultLang('en');



  platform.ready().then(() => {
    StatusBar.styleDefault();
    Splashscreen.hide();
  });
}


}


