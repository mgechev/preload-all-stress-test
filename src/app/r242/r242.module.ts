import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R242RoutingModule } from './r242-routing.module';
import { R242Component } from './r242.component';


@NgModule({
  declarations: [R242Component],
  imports: [
    CommonModule,
    R242RoutingModule
  ]
})
export class R242Module { }
