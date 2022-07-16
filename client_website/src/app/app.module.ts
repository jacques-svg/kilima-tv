import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { LoginService } from './services/login.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './services/app.service';
import { MovieService } from './services/movie.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from './material.module';
import { WatchComponent } from './watch/watch.component';
import { CloudflareStreamModule } from '@cloudflare/stream-angular';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    WatchComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PricingComponent,
    AboutComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    CarouselModule,
    SwiperModule,
    NgbPaginationModule, NgbAlertModule,
    SlickCarouselModule,
    MaterialModule,
    CloudflareStreamModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    LoginService,
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
