import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

import { ActivatedRoute } from '@angular/router';
import { TimeEpochEnum } from 'src/app/core/enums/TimeEpoch.enum';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  
  public city: string;
  public infoCity: any;
  public timeEpochEnum = TimeEpochEnum;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.city = this.activatedRoute.snapshot.params['cityname'];
    this.getDataCity();
  }

  public getDataCity(): void {
    if(this.city){
      this.apiService.getDailyWeather(this.city)
      .subscribe(res => {
        this.infoCity = res;
      }, error => {
        throw Error(error.message);
      })
    }
  }

  public setBackground(theme: string, condition: any = ''): boolean {

     if(theme === 'Snowy' && condition <= 0){
        return true;
     }

     if(theme === 'Rainy' && 
     (condition === 'Rainy' || condition === 'Light sleet showers')){
        return true;
     }

     return theme === 'Default';
  }


}
