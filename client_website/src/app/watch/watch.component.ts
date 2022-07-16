import { Component, OnInit } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
    selector: 'app-watch-ui',
    templateUrl: './watch.component.html',
    styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

    public current_watch = {title: '', description: '', movie_id: 0, token: ''};
    
    constructor(public loginService: LoginService, public mediaService: MovieService, public route: Router) {

    }

    ngOnInit(): void {
        console.log(this.mediaService.current_watch);
        if (this.mediaService.current_watch == undefined) {
            this.route.navigateByUrl('/home')
        } else {
            this.current_watch = this.mediaService.current_watch;
        }
    }
}
