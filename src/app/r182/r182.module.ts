import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R182RoutingModule } from './r182-routing.module';
import { R182Component } from './r182.component';


@NgModule({
  declarations: [R182Component],
  imports: [
    CommonModule,
    R182RoutingModule
  ]
})
export class R182Module { }
