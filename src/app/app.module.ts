import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StaysComponent } from './pages/stays/stays.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { AdventuresComponent } from './pages/adventures/adventures.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StaysComponent,
    ExperiencesComponent,
    AdventuresComponent,
    RestaurantsComponent,
    NavigationComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
