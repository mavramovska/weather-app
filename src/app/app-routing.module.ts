import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherComponent } from './components/weather-component/weather.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '', pathMatch: 'full', redirectTo: 'weather'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
