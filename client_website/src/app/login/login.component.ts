import { Component } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-login-ui',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    title = 'client_website';

    public home_image_block_1 = [{ path: "assets/img/vid-cards/mv13.png" }, { path: "assets/img/vid-cards/mv14.png" }, { path: "assets/img/vid-cards/mv15.png" }, { path: "assets/img/vid-cards/mv16.png" }, { path: "assets/img/vid-cards/mv17.png" }, { path: "assets/img/vid-cards/mv18.png" }, { path: "assets/img/vid-cards/mv19.png" }, { path: "assets/img/vid-cards/mv20.png" }, { path: "assets/img/vid-cards/mv21.png" }, { path: "assets/img/vid-cards/mv22.png" }, { path: "assets/img/vid-cards/mv23.png" }, { path: "assets/img/vid-cards/mv24.png" }]

    constructor(public loginService: LoginService, public appService: AppService, public route: Router, private toastr: ToastrService) {
        this.appService.HideHeader();
        this.appService.HideFooter();
    }

    GoogleAuthentication() {
        this.loginService.GoogleAuth().then((user_credential: firebase.auth.UserCredential) => {
            let payload = {
                email: "",
                photoURL: "",
                phoneNumber: "",
                fullname: ""
            };

            if (user_credential.user?.email) {
                payload.email = user_credential.user.email;
            } else {
                // TODO: Report telemetry.
            }

            if (user_credential.user?.displayName) {
                payload.fullname = user_credential.user.displayName;
            } else {
                // TODO: Report telemetry.
            }

            if (user_credential.user?.phoneNumber) {
                payload.phoneNumber = user_credential.user.phoneNumber;
            } else {
                // TODO: Report telemetry.
            }

            if (user_credential.user?.photoURL) {
                payload.photoURL = user_credential.user.photoURL;
            } else {
                // TODO: Report telemetry.
            }

            // console.log(payload);

            this.loginService.MaybeCreateUser(payload).subscribe({
                next: (registration_status) => {
                    this.route.navigateByUrl("/home");
                    // TODO: Go to home page.
                },
                error: (error_message) => {
                    // toast().default('Title', 'Message!').show()
                    // this.route.navigateByUrl("/home");
                    // if (error_message.status == 404) {
                    //     this.route.navigateByUrl("/registration");
                    // } else {
                    //     // TODO: Report telemetry.
                    // }
                },
                complete: () => { },
            });
        }, (error) => {

        });
    }
}
