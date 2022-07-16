import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MusicsComponent } from './musics/musics.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './home/main/main.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { TvShowDetailsComponent } from './tv-shows/tv-show-details/tv-show-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KilimaTranslationDirective } from './helper/translation/kilima-translation.directive';
import { KilimaTranslationPipe } from './helper/translation/kilima-translation.pipe';
import { MoviesService } from './services/movies.service';
import { PlayerComponent } from './player/player.component';
import { CloudflareStreamModule } from '@cloudflare/stream-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    MusicsComponent,
    SubscriptionsComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    PlayerComponent,
    KilimaTranslationDirective,
    KilimaTranslationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    // ngx-translate and the loader module
    HttpClientModule,
    CloudflareStreamModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}