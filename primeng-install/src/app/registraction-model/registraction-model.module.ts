import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// registration.model.ts
export interface Registration {
  id: number;
  name: string;
  email: string;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RegistractionModelModule { }
