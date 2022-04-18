import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

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
