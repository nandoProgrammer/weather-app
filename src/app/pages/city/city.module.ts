import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';

import { KmToMeterPipe } from 'src/app/core/pipes/KmToMeterSeconds.pipe';

import { LoadingModule } from 'src/app/components/loading/loading.module';

@NgModule({
  declarations: [CityComponent, KmToMeterPipe],
  imports: [
    CommonModule,
    LoadingModule,
    CityRoutingModule,
  ]
})
export class CityModule { }
