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

export class LoginService {
    public user: Observable<firebase.User | null>;
    public userDetails: firebase.User | null = null;
    public idToken = '';

    public userDetailsObject = {
        email: "",
        photoURL: "",
        phoneNumber: "",
        fullname: "" 
    }

    constructor(
        public afAuth: AngularFireAuth,
        public httpClient: HttpClient,
        public router: Router
    ) {
        this.user = afAuth.authState;
        this.userDetailsObject = {
            email: "",
            photoURL: "",
            phoneNumber: "",
            fullname: "" 
        }
        
        this.user.subscribe((user) => {
            if (user) {
                this.userDetails = user;
                console.log(this.userDetails);
                
                if (this.userDetails.displayName) {
                    this.userDetailsObject.fullname = this.userDetails.displayName;
                }

                if (this.userDetails.email) {
                    this.userDetailsObject.email = this.userDetails.email;
                }

                if (this.userDetails.phoneNumber) {
                    this.userDetailsObject.phoneNumber = this.userDetails.phoneNumber;
                }

                if (this.userDetails.photoURL) {
                    this.userDetailsObject.photoURL = this.userDetails.photoURL;
                }
            } else {
                this.userDetails = null;
            }
        });
    }

    GetAuthState() {
        return this.afAuth.authState;
    }

    IsLoggedIn() {
        if (this.userDetails == null) {
            return false;
        } else {
            return true;
        }
    }

    Logout() {
        this.afAuth.signOut().then((result => {
            this.router.navigateByUrl("/login");
        }));
    }

    public GetToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.afAuth.authState.subscribe((user) => {
                user?.getIdToken().then(idToken => {
                    this.idToken = idToken;
                    resolve(idToken);
                });
            });
        });
    }

    // Sign in with Google
    GoogleAuth() {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.setPersistence("local").then(() => {
                resolve(this.AuthLogin(new GoogleAuthProvider()));
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // Auth logic to run auth providers
    AuthLogin(provider: any): Promise<firebase.auth.UserCredential> {
        return this.afAuth.signInWithPopup(provider);
    }

    IsUserRegisteredForEmail(email: string) {
        return this.httpClient.get(`${environment.endpointUrl}/users/${email}`);
    }

    MaybeCreateUser(data: any) {
        return this.httpClient.post(`${environment.endpointUrl}/users`, data);
    }
}