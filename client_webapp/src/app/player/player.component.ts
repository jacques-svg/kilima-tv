import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public userLang = navigator.language; 
  public language:string = this.translate.currentLang || this.userLang.substr(0,2);

  public video_play_code = "";

  public movie_id = "95f92066148dada945b7b1fe65678362";

  constructor(
        public translate: TranslateService,
        private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.translate.use(this.translate.currentLang);
    console.log(this.translate.currentLang);

    this.movie_id = this.route.snapshot.params['movie_id'];
  }
}
