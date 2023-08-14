import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { City } from 'src/app/models/weatherCityModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  cityWeatherInformation : City[] =[];
  city: string='bitola';

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
  
    this.weatherService.getWeather(this.city)
      .subscribe((res : City[]) => {
        console.log(res)
        this.cityWeatherInformation = res;
         console.log(res)
        });
    }
  }

