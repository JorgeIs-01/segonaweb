import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
public container: string;
public  vacio: string;






  constructor() { }

  ngOnInit(): void {


  }
  accion(accionusuario){
    if(accionusuario.target.value=="anadir"){
    this.container="anadir";
  }else{
      this.vacio="";
    }
  }

}
