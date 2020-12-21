import { Component, ContentChild, OnInit } from '@angular/core';
import { VelocityWidgetComponent } from '../widget/velocity-widget.component';
import { WeatherWidgetComponent } from '../widget/weather-widget.component';
import { Widget } from '../widget/widget.interface';
import { WIDGET } from '../widget/widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css'],
 
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET, {static:true})
  widget:Widget;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  onRefresh(){
   this.widget.refresh();
    
  }
  onLoad(){
    this.widget.load();
  }


}
