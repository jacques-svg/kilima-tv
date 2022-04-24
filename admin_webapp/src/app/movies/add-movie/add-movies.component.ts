import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/common/navbar/navbar.service';

@Component({
  selector: 'add-movie-ui',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(public router: Router, public navbarService: NavbarService) {
    this.navbarService.show();
  }

  ngOnInit(): void {
      
  }

}
