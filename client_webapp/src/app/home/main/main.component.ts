import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    list_of_movie = [];

    constructor(public moviesService: MoviesService) { }

    ngOnInit(): void {
        this.moviesService.getAllMovies().subscribe((result: any) => {
            this.list_of_movie = result.data;
            console.log(this.list_of_movie);
        });
    }

    lookMovieDetail() {

    }

}
