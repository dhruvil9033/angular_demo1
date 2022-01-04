import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { PracticeComponent } from './practice/practice.component';
import { Practice2Component } from './practice2/practice2.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessAlertComponent,
    PracticeComponent,
    Practice2Component,
    OddComponent,
    EvenComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
