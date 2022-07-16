import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root',
})

export class AppService {
    public should_show_header = true;
    public should_show_footer = true;

    constructor() {}

    public ShowHeader() {
        this.should_show_header = true;
    }

    public HideHeader() {
        this.should_show_header = false;
    }

    public ShowFooter() {
        this.should_show_footer = true;
    }

    public HideFooter() {
        this.should_show_footer = false;
    }

}