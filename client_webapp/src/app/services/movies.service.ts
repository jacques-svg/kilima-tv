import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root',
})

export class MoviesService {
    
    constructor(private http: HttpClient) { }

    getAllMovies(): any {
        return this.http.get(`${environment.endpointUrl}/movies`);
    }
  
}