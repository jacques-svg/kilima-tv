import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavBarComponent } from './common/navbar/navbar.component';
import { NavbarService } from './common/navbar/navbar.service';
import { DashboardComponent } from './dashoboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './movies/add-movie/add-movies.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavBarComponent,
    HeaderComponent,
    MoviesComponent,
    AddMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
