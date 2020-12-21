import { Injectable } from '@angular/core';
import { Loggers } from './loggers';

@Injectable(
  {
    providedIn:'root'
  }
)
export class ExperimentalService implements Loggers{
  prefix:string;
  constructor() { }
  log(message:string){
    console.log(`${this.prefix} (experimental): ${message}`)
  }
}
