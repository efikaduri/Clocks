import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CityTimeComponent } from './components/city-time/city-time.component';
import { AnalogClockComponent } from './components/city-time/analog-clock/analog-clock.component';
import { DigitalClockComponent } from './components/city-time/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    CityTimeComponent,
    AnalogClockComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
