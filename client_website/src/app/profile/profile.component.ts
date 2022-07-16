import { Component, OnInit } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-ui',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(public loginService: LoginService, public route: Router) {

    }

    ngOnInit(): void {
        
    }

    logout() {
        this.loginService.Logout();
    }
}
