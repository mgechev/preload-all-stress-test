import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R15RoutingModule } from './r15-routing.module';
import { R15Component } from './r15.component';


@NgModule({
  declarations: [R15Component],
  imports: [
    CommonModule,
    R15RoutingModule
  ]
})
export class R15Module { }
