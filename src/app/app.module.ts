import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LockInputComponent } from './lock-input/lock-input.component';
import { ValueAccessorComponent } from './value-accessor/value-accessor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { VelocityWidgetComponent } from './widget/velocity-widget.component';
import { WeatherWidgetComponent } from './widget/weather-widget.component';
import { MaterialModule } from './material/material.module';
import { AdvancedSearchControlModule } from './advanced-search-control/advanced-search-control.module';
@NgModule({
  declarations: [
    AppComponent,
    LockInputComponent,
    ValueAccessorComponent,
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AdvancedSearchControlModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
