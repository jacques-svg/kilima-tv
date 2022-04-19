import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public userLang = navigator.language; 
  public language:string = this.translate.currentLang || this.userLang.substr(0,2);
  constructor(
    public translate: TranslateService
) {}

  ngOnInit(): void {
    this.translate.use(this.translate.currentLang)
    console.log(this.translate.currentLang)
  }
}
