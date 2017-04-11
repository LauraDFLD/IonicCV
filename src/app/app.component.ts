import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { TranslateService, TranslatePipe, TranslateLoader } from 'ng2-translate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, translate: TranslateService) {
  var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(fr|en|de)/gi.test(userLang) ? userLang : 'en';
 
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
 
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);



  platform.ready().then(() => {
    StatusBar.styleDefault();
    Splashscreen.hide();
  });
}


}


