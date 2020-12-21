import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-value-accessor',
  templateUrl: './value-accessor.component.html',
  styleUrls: ['./value-accessor.component.css'],
  
})
export class ValueAccessorComponent implements OnInit {
  
  
  fg:FormGroup;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.fg=this.fb.group({
      itemName:[],
      isLocked:new FormControl({value:true, disabled:true})
    })
  }
 
  save(){
    console.log(this.fg.value);
  }

}
