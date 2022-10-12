import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";

import { CitiesEnum } from 'src/app/core/enums/Cities.enum';
import { CityComponent } from './city.component';
import { ApiService } from '../../core/services/api.service';

import { UrlInterceptor } from '../../core/interceptors/url.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { DailyWeather } from '../../core/interfaces/DailyWeather';

describe('CityComponent', () => {
  let component: CityComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<CityComponent>;
  let httpClient: HttpClient;
  let apiService: ApiService;

  let URL = `${environment.BASE_URL}forecast.json?key=${environment.WEATER_API_KEY}&q=london&days=1&aqi=no&alerts=no`;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,  RouterTestingModule], 
      declarations: [ CityComponent ],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have to content button return', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main #return')).toBeTruthy();
  })

  it('should set theme', () => {
    expect(component.setBackground('Default')).toBe(true);
    expect(component.setBackground('Snowy', 0)).toBe(true);
    expect(component.setBackground('Rainy', 'Rainy')).toBe(true);
    expect(component.setBackground('Rainy', 'Light sleet showers')).toBe(true);
  })

  it('Should have get Weather Api data', (done) => {
     apiService.getDailyWeather('london').subscribe(res => {
      expect(res).toBeTruthy();
      done();
     })

     const req = httpTestingController.expectOne(URL);
     req.flush({});
     expect(req.request.method).toEqual('GET');
  })
});
