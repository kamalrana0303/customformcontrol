
import { Component } from '@angular/core';

import { ExperimentalService } from './experimental.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{
    provide:LoggerService,
    useExisting:ExperimentalService,
  
    
  }]
})
export class AppComponent {
  constructor(private loggerService:LoggerService, private experimentalLoggerService:ExperimentalService){
    this.loggerService.prefix="AppComponent";
    
    this.loggerService.log("service is involked");
    
    console.log((this.loggerService) instanceof ExperimentalService )
    console.log(this.experimentalLoggerService===this.loggerService);
  }
}
