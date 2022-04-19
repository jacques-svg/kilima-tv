import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
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
