import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R317RoutingModule } from './r317-routing.module';
import { R317Component } from './r317.component';


@NgModule({
  declarations: [R317Component],
  imports: [
    CommonModule,
    R317RoutingModule
  ]
})
export class R317Module { }
