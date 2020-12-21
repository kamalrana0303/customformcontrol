import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormFieldControlComponent } from './custom-form-field-control/custom-form-field-control.component';
import { SearchFormFieldContainerComponent } from './search-form-field-container/search-form-field-container.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [CustomFormFieldControlComponent, SearchFormFieldContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[CustomFormFieldControlComponent, SearchFormFieldContainerComponent]
})
export class AdvancedSearchControlModule { }
