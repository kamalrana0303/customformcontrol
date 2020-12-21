import { Injectable } from '@angular/core';
import { Loggers } from './loggers';

@Injectable()
export class LoggerService implements Loggers
{
  prefix:string;
  constructor() { }
  log(message:string){
    console.log(`${this.prefix} : ${message}`);
  }
}
