import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { AltaeventsComponent } from './altaevents/altaevents.component';
import { ModificareventComponent } from './modificarevent/modificarevent.component';
const routes = [

  {path: '',pathMatch:'full', redirectTo:'inici'},
  {path:'inici', component:IniciComponent},
  {path:'events', component:EventsComponent},
  {path:'alta', component:AltaeventsComponent},
  {path:'modificar', component:ModificareventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
