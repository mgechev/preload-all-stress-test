import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R272RoutingModule } from './r272-routing.module';
import { R272Component } from './r272.component';


@NgModule({
  declarations: [R272Component],
  imports: [
    CommonModule,
    R272RoutingModule
  ]
})
export class R272Module { }
