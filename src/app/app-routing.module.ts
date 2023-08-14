import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather-component/weather.component';
import { NavbarComponent } from './components/navbar-component/navbar.component';

const routes: Routes = [
  { path: 'navbar-component', component: NavbarComponent },
  { path: 'weather-component', component: WeatherComponent },
  { path: '', pathMatch: 'full', redirectTo: 'weather-component'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
