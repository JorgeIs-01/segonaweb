import { Component, OnInit , Input} from '@angular/core';
import { eventos } from '../models/model';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

@Input() altaevento:eventos;
  btnClick= function () {
    this.router.navigateByUrl('/modificar');
};


  constructor() { }

  ngOnInit(): void {


  }

}
