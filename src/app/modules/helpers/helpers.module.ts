import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyToastService } from './services/toaster/my-toast-service.service';
import { TranslatePipe } from './pipes/translate.pipe';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  providers:[MyToastService]
})
export class HelpersModule { }
