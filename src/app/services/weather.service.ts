import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe } from 'rxjs';
import { City } from '../models/weatherCityModel';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?';
  private ApiKey = 'e6bc66de497d5f5aa3106449f52510f5';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get<City>(this.baseWeatherURL  + 'q=' + city + '&appid='+ this.ApiKey +'&units=metric');
  }
}

