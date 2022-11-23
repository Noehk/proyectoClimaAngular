import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string ="";

  constructor(private httpClient: HttpClient) { 

    this.url='https://api.openweathermap.org/data/2.5/weather?appid=ff3b62a0cfd78959cc28b0d54c3ad000&q=';


  }

  getWeather(city:string){
    return this.httpClient.get(`${this.url}${city}`);
  }
}
