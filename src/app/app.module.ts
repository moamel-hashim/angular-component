import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HokeyComponent } from './hokey.component';
import { BaseballComponent } from './baseball.component';
import { SportsService } from './sports.service';

@NgModule({
  declarations: [
    AppComponent, HokeyComponent, BaseballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
