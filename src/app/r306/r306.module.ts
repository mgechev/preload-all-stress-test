import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R306RoutingModule } from './r306-routing.module';
import { R306Component } from './r306.component';


@NgModule({
  declarations: [R306Component],
  imports: [
    CommonModule,
    R306RoutingModule
  ]
})
export class R306Module { }
