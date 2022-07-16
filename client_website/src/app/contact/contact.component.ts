import { Component } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';


@Component({
    selector: 'app-contact-ui',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    constructor(public loginService: LoginService, public route: Router) {

    }
}
