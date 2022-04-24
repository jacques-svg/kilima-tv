import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {

    public active_index: number = 0;

    constructor(public router: Router,  public navbarService: NavbarService) {

    }

    logout(): void {
        this.navbarService.hide();
        this.router.navigateByUrl('/');
    }

    showMenu(index: number) {
        this.active_index = index;
        this.navbarService.show();

        if (this.active_index == 0) {
            this.router.navigateByUrl("/dashboard")
            return;
        }

        if (this.active_index == 1) {
            console.log("I am here")
            this.router.navigateByUrl("/movies")
            return;
        }
    }
}
