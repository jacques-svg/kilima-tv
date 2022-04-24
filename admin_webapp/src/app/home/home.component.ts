import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../common/navbar/navbar.service';

@Component({
  selector: 'home-ui',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public router: Router, public navbarService: NavbarService) {
    this.navbarService.hide();
  }

  login(): void {
    this.router.navigateByUrl('/dashboard');
  }

}
