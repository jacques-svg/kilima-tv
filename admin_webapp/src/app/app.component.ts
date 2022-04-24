import { Component } from '@angular/core';
import { NavbarService } from './common/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin_webapp';

  constructor(public nav: NavbarService ) {

  }
}
