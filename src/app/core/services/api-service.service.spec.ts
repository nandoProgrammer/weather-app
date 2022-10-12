import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CitiesEnum } from 'src/app/core/enums/Cities.enum';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ApiService,
      ],
    });
    apiService = TestBed.get(ApiService);
  });

  it('should create', inject([HttpTestingController, ApiService],
      (httpMock: HttpTestingController, apiService: ApiService) => {
        expect(apiService).toBeTruthy();
      }
    )
  );
  
  it('should get endpoint', () => {
    const city = CitiesEnum.LONDON;
    expect(apiService.getDailyWeather(city)).toBeTruthy();
  })
});