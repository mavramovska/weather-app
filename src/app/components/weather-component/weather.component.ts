import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorModel } from 'src/app/models/errorsModel';
import { CityWeather } from 'src/app/models/weatherCityModel';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  cityWeatherInformation: CityWeather = {
    weather: []
  };
  weatherFormGroup = new FormGroup({
    city: new FormControl('', Validators.required)
  });


  constructor(
    private weatherService: WeatherService,
    public router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit() {}

  searchCityWeather() {
    const city = this.weatherFormGroup.controls['city'].value;
    if(city) {
      this.weatherService.getWeather(city)
      .subscribe(
        (res : CityWeather) => {
          this.cityWeatherInformation = res;
        },
        (err: ErrorModel) => {
          if(err.error.cod === '404') {
            this.router.navigate(['not-found']);            
          } else {
            this.toastr.error(err.error.cod , err.error.message);
          }
        });
    }
  }
}

