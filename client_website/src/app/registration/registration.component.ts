import { Component, OnInit } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";

@Component({
    selector: 'app-registration-ui',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    public user_name = "";

    constructor(public loginService: LoginService) {

    }

    ngOnInit(): void {
        if (this.loginService.userDetails?.displayName) {
            this.user_name = this.loginService.userDetails?.displayName;
        }
        //console.log(this.loginService.userDetails?.displayName);
    }
}