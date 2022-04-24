import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../common/navbar/navbar.service';

@Component({
  selector: 'dashboard-ui',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit {

    constructor(public navbar: NavbarService) {
        this.navbar.show();
    }

    ngOnInit(): void {
        this.navbar.show();
        console.log(this.navbar.visible);
    }
}
