import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-altaevents',
  templateUrl: './altaevents.component.html',
  styleUrls: ['./altaevents.component.css']
})
export class AltaeventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class Events2 {
  name: string;
  capital: string;
  area: number;
  population: number;
  currency: string;
  gdp: number;
}


