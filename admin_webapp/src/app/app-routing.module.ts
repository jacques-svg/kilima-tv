import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashoboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to 
  { path: 'home', component:  HomeComponent},
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
