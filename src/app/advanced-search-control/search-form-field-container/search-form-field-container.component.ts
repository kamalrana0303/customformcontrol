import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form-field-container',
  templateUrl: './search-form-field-container.component.html',
  styleUrls: ['./search-form-field-container.component.css']
})
export class SearchFormFieldContainerComponent implements OnInit {
  formControl=new FormControl({scope:null , query:''},requiredValidator);
  constructor() { }

  ngOnInit(): void {
  }
  
}
function requiredValidator(control:FormControl): {validateSearch:{inValid:boolean}}|null{
  console.log("|"+control.value+"|")
  const flag= control.value.scope !==null && control.value.query !==''?
  null:{
    validateSearch:{
      inValid:true
    }
  }
  console.log(JSON.stringify(flag));
  return flag;
}
