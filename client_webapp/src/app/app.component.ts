import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router, public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
    translate.use('fr');
}
  title = 'kilima-tv';
}
