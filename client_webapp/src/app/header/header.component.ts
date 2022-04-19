import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userLang = navigator.language; 
  public language:string = this.translate.currentLang || this.userLang.substr(0,2);
  constructor(
    public translate: TranslateService
) {}

  ngOnInit(): void {
    this.translate.use(this.translate.currentLang)
  }

  onChange(e:any) {
    this.translate.use(e.target.value)
  }
}
