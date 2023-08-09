import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate.pipe';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class MyI18nModule { }
