
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ExperiencesPage } from '../pages/experiences/experiences';
import { ProfilPage } from '../pages/profil/profil';
import { CompetencesPage } from '../pages/competences/competences';
import { FormationsPage } from '../pages/formations/formations';
import { Http } from '@angular/http';
import { 
  TranslateModule, 
  TranslateStaticLoader, 
  TranslateLoader, TranslatePipe } from 'ng2-translate/ng2-translate';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CompetencesPage,
    FormationsPage,
    ProfilPage,
    ExperiencesPage
  ],
  imports: [
  IonicModule.forRoot(MyApp),
  TranslateModule.forRoot({
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  })
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CompetencesPage,
    FormationsPage,
    ProfilPage,
    ExperiencesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
