import { Component, OnInit } from '@angular/core';
import { Widget } from './widget.interface';
import { WIDGET } from './widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.css'],
  providers:[
    {
      provide:WIDGET,
      useExisting:VelocityWidgetComponent
    }
  ]
})
export class VelocityWidgetComponent implements OnInit, Widget {
  isRefereshing=false;
  constructor() { }

  ngOnInit(): void {
    
  }
  load(){
    console.log("fetching velocity data from api....")
  }
  refresh(){
    this.isRefereshing=true;
    setTimeout(()=>{
      this.isRefereshing=false
    },2000);

  }

}
