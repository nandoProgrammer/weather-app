import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { CitiesEnum } from '../../core/enums/Cities.enum';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have to content title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('WEATER');
  })

  it('should have to content subtitle', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('select a city');
  })

  it('should have to content img', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container img')).toBeTruthy();
  })

  it('shoud have a cities', () => {
    const cities = [CitiesEnum.DALLOL, CitiesEnum.FAIRBANKS, CitiesEnum.LONDON, CitiesEnum.RECIFE, CitiesEnum.VANCOUVER, CitiesEnum.YAKUTSK];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    cities.forEach((item) => {
      expect(compiled.querySelector('ul')?.textContent).toContain(item);
    })
    
  })


});
