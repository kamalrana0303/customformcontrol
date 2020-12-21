import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from "@angular/material/progress-bar"
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from "@angular/material/select"

export const material=[
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule
]
@NgModule({
  exports:[
    material
  ],
  imports: [
   material
  ]
})
export class MaterialModule { }
