import { Component, OnInit } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';

@Component({
    selector: 'app-terms-ui',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

    constructor(public loginService: LoginService, public route: Router) {

    }

    ngOnInit(): void {
        
    }
}
