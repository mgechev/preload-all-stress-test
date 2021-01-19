import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R360RoutingModule } from './r360-routing.module';
import { R360Component } from './r360.component';


@NgModule({
  declarations: [R360Component],
  imports: [
    CommonModule,
    R360RoutingModule
  ]
})
export class R360Module { }
