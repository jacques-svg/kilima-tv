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

export class MovieService {

    public current_watch: any = undefined;

    constructor(
        public afAuth: AngularFireAuth,
        public httpClient: HttpClient,
        public router: Router
    ) { }

    public getTopRecentMovie(top_recent: Number) {
        return this.httpClient.get(`${environment.endpointUrl}/movies/${top_recent}`);
    }

    public getTopPopularMovie() {
        return this.httpClient.get(`${environment.endpointUrl}/movies/top_popular`);
    }

    public AddUserCurrentWatch(movie: any) {
        this.current_watch = movie;
    }

    public maybeGetPlayLink(token: any, movie_id: any) {
        let payload = {
            token: token,
            movie_id: movie_id
        };

        return this.httpClient.post(`${environment.endpointUrl}/movies/watch`, payload);
    }
}