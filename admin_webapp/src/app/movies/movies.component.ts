import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../common/navbar/navbar.service';

@Component({
  selector: 'movies-ui',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(public router: Router, public navbarService: NavbarService) {
    this.navbarService.show();

  }

  ngOnInit(): void {
    //   this.navbarService.show();
  }

}
