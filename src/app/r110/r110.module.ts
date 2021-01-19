import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R110RoutingModule } from './r110-routing.module';
import { R110Component } from './r110.component';


@NgModule({
  declarations: [R110Component],
  imports: [
    CommonModule,
    R110RoutingModule
  ]
})
export class R110Module { }
