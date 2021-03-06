import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StaysComponent } from './pages/stays/stays.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { AdventuresComponent } from './pages/adventures/adventures.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent
  },
  {
    path: 'stays',
    component: StaysComponent
  },
  {
    path: 'experiences',
    component: ExperiencesComponent
  },
  {
    path: 'adventures',
    component: AdventuresComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
