import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R142RoutingModule } from './r142-routing.module';
import { R142Component } from './r142.component';


@NgModule({
  declarations: [R142Component],
  imports: [
    CommonModule,
    R142RoutingModule
  ]
})
export class R142Module { }
