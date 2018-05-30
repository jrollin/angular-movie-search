import { NgModule } from '@angular/core';
import {
  MdcButtonModule,
  MdcTextFieldModule,
  MdcListModule,
} from '@angular-mdc/web';

@NgModule({
  imports: [
    MdcButtonModule,
    MdcTextFieldModule,
    MdcListModule
  ],
  declarations: [],
  exports: [
    MdcButtonModule,
    MdcTextFieldModule,
    MdcListModule
  ]
})
export class MDCModule { }
