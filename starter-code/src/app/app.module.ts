import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {CinemaService} from './services/cinema.service';

import { AppComponent } from './app.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { MyHomeComponent } from './my-home/my-home.component';


const myRoutes: Routes = [
  {path: 'home', component: MyHomeComponent},
  {path: 'movies/:id', component: MyMovieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [
    CinemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
