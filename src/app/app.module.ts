import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { AltaeventsComponent } from './altaevents/altaevents.component';
import { ModificareventComponent } from './modificarevent/modificarevent.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    EventsComponent,
    AltaeventsComponent,
    ModificareventComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
