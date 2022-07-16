import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { MusicsComponent } from './musics/musics.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { TvShowDetailsComponent } from './tv-shows/tv-show-details/tv-show-details.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movies', component: MoviesComponent,children:[
    { path: 'details', component: MovieDetailsComponent },
    ] 
  },
  { path: 'movies-details', component: MovieDetailsComponent },
  { path: 'tv-show', component: TvShowsComponent },
  { path: 'tv-show-details', component: TvShowDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'musics', component: MusicsComponent },
  { path: 'watch/:movie_id', component: PlayerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
