import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lock-input',
  templateUrl: './lock-input.component.html',
  styleUrls: ['./lock-input.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:LockInputComponent,
      multi:true
    }
  ]
})
export class LockInputComponent implements OnInit , ControlValueAccessor{

  value:boolean=false;
  isDisabled:boolean=false;
  onChange:(value:boolean)=>void;
  onTouched:()=>void;
  constructor() { }
  writeValue(obj: any): void {
    this.value=obj
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled=isDisabled;
  }

  ngOnInit(): void {
  }
  setValue():void{
    if(this.isDisabled){
      return
    }
    this.value=!this.value;
    this.onChange(this.value);
    this.onTouched();
  }

}
