import { Component, OnInit } from '@angular/core';

import { CitiesEnum } from 'src/app/core/enums/Cities.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities: Array<{name: string}> = [
    { name: CitiesEnum.DALLOL },
    { name: CitiesEnum.FAIRBANKS },
    { name: CitiesEnum.LONDON },
    { name: CitiesEnum.RECIFE },
    { name: CitiesEnum.VANCOUVER },
    { name: CitiesEnum.YAKUTSK }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
