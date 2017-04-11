import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CompetencesPage } from '../competences/competences';
import { ExperiencesPage } from '../experiences/experiences';
import { FormationsPage } from '../formations/formations';
import { ProfilPage } from '../profil/profil';
import {TranslatePipe} from "ng2-translate/ng2-translate";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ProfilPage;
  tab2Root: any = FormationsPage;
  tab3Root: any = ExperiencesPage;
  tab4Root: any = CompetencesPage;
  tab5Root: any = ContactPage;

  constructor() {

  }
}
