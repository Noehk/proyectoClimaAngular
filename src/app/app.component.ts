import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather';
  weather:any;
  constructor(private weatherService: WeatherService){


  }

  ngOnInit(){
    
  }

  getWeather(city:string){
    this.weatherService.getWeather(city)
    .subscribe(
      res=>this.weather=res,
      err=>console.log(err)
    )
  }
  submitLocation(cityName:HTMLInputElement){
    this.getWeather(cityName.value);

    cityName.value="";
    cityName.focus();

    return false;

  }
}
