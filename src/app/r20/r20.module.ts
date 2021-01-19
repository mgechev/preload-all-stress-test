import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R20RoutingModule } from './r20-routing.module';
import { R20Component } from './r20.component';


@NgModule({
  declarations: [R20Component],
  imports: [
    CommonModule,
    R20RoutingModule
  ]
})
export class R20Module { }
