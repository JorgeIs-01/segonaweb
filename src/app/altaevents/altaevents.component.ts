import { Component, OnInit, OnChanges , Output, EventEmitter} from '@angular/core';
import { eventos } from '../models/model';




@Component({
  selector: 'app-altaevents',
  templateUrl: './altaevents.component.html',
  styleUrls: ['./altaevents.component.css']
})

export class AltaeventsComponent implements OnInit {
  @Output() altaevento = new EventEmitter<eventos>();


Formulario = new eventos('','','','');

EnviarDatos(){
  // if(vevento.value==""){
  //   alert("el nombre esta vacio")
  // }
  // if(vtext.value.length<=2){
  //   this.mostrarInfo2="Incorrecto2"
  // }else{
  //   this.mostrarInfo2="Correcto2"
  // }
  this.altaevento.emit(this.Formulario);

  this.Formulario = new eventos('','','','');
}
  constructor() { }

  ngOnInit(): void {
  }

}


