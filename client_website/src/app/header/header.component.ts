import { Component, OnInit } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-ui',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public is_logged = false;
    public display_name = "";

    constructor(public loginService: LoginService, public route: Router) {

    }

    ngOnInit(): void {
        this.loginService.GetAuthState().subscribe((user) => {
            if (user) {
                this.is_logged = true;
                if (user.displayName)
                    this.display_name = user.displayName; //.split(" ")[0];
            }

            else { this.is_logged = false; }
        })
    }

    logout() {
        this.loginService.Logout();
    }

    goToHome() {
        this.route.navigateByUrl('/home');
    }
}
