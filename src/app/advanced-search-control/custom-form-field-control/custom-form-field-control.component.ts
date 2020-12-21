import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, DoCheck, ElementRef, HostBinding, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CanUpdateErrorStateCtor, ErrorStateMatcher, mixinErrorState } from '@angular/material/core';
import {  MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Observable, Subject } from 'rxjs';
import {take} from 'rxjs/operators'
export interface FormFieldValue{
  query:string;
  scope:string;
}
export class CustomErrorMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return control.dirty && control.invalid;
  }

}
class SearchInputBase{
  constructor(public _parentFormGroup: FormGroupDirective, 
    public _parentForm: NgForm,
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public ngControl: NgControl
  ){}

}
const _SearchInputMixiBase:CanUpdateErrorStateCtor=mixinErrorState(SearchInputBase)

@Component({
  selector: 'app-custom-form-field-control',
  templateUrl: './custom-form-field-control.component.html',
  styleUrls: ['./custom-form-field-control.component.css'],
  providers:[
    {
      provide:MatFormFieldControl,
      useExisting:CustomFormFieldControlComponent
    },
    {
      provide: ErrorStateMatcher,
      useClass:CustomErrorMatcher
    }
  ]
})
export class CustomFormFieldControlComponent extends _SearchInputMixiBase
implements OnInit , MatFormFieldControl<FormFieldValue>, ControlValueAccessor, DoCheck{
  
  static nextId=0
  fg:FormGroup;
  @ViewChild(MatInput,{read:ElementRef,static:true})
  input:ElementRef;
  @Input()
  set value(val:FormFieldValue){
    this.fg.patchValue(val);
    this.stateChanges.next();
  }
  get value(){
    return this.fg.value;
  }
  
  stateChanges=new Subject<void>();
  @HostBinding()
  id: string=`custom-form-field-id-${CustomFormFieldControlComponent.nextId++}`
  @Input()
  set placeholder(val:string){
    this._placeholder=val;
    this.stateChanges.next();
  }
  get placeholder(){
    return this._placeholder;
  }
  _placeholder: string;
  
  focused: boolean;
  get empty(){
    return !this.value.query && !this.value.scope;
  }
  
  shouldLabelFloat:boolean=true;
   
  @HostBinding('class.required') requiredColor:boolean;
  @Input()
  set required(flag:boolean){
    this.requiredColor=flag;
    this._required=flag;
  }
  get required(){
    return this._required;
  }
  _required:boolean;

  @Input()
  disabled:boolean
  
 /* get errorState():boolean{
    return this._defaultErrorStateMatcher.isErrorState(this.ngControl.control as FormControl,null)
  }*/
  controlType?: string;
  autofilled?: boolean;
  userAriaDescribedBy?: string;
  @HostBinding('attr.arria-described-by') describedBy=''
  setDescribedByIds(ids: string[]): void {
    this.describedBy=ids.join(' ');
   
  }
  onContainerClick(event: MouseEvent): void {
    this.focuseMonitor.focusVia(this.input, 'program');
  }

  constructor(private focuseMonitor:FocusMonitor, 
    @Optional() @Self() public ngControl: NgControl, 
    private fb:FormBuilder,
    private _defaultErrorStateMatcher:ErrorStateMatcher,
    @Optional() _parentFormGroup:FormGroupDirective,
    @Optional() _parentForm:NgForm) {

    super(_defaultErrorStateMatcher,_parentForm,_parentFormGroup,ngControl);
    if(ngControl){
      this.ngControl.valueAccessor=this;
    }
    this.fg=this.fb.group({
      scope:new FormControl(),
      query:new FormControl()
    })

  }
   
  onChange:(value:FormFieldValue)=>void;
  onTouched:()=>void;
  writeValue(obj: FormFieldValue): void {
    this.value=obj;
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   this.disabled=isDisabled;
   this.fg.disable();
   this.stateChanges.next();
  }

  ngOnInit(): void {
    this.focuseMonitor.monitor(this.input).subscribe((focus)=>{
      this.focused=!!focus;
      this.stateChanges.next();
    });
    this.focuseMonitor.monitor(this.input).pipe(take(1)).subscribe(()=>{
      console.log("you touched first time")
      this.onTouched();
    })
    this.fg.valueChanges.subscribe((value)=>this.onChange(value));
  }
  ngDoCheck(){
    if(this.ngControl){
      this.updateErrorState()
    }
  }
  ngOnDestroy(){
    this.focuseMonitor.stopMonitoring(this.input);
    this.stateChanges.complete();
  }

}
