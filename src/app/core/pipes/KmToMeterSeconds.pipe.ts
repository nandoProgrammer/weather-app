import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kmToMeterSeconds'
})
export class KmToMeterPipe implements PipeTransform {

  transform(kilometer:number): string {
    let kmToMeter = 1000;
    
    return `${Math.ceil(kilometer / 3.6)} m/s`;
  }

}