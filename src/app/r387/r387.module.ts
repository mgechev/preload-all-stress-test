import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R387RoutingModule } from './r387-routing.module';
import { R387Component } from './r387.component';


@NgModule({
  declarations: [R387Component],
  imports: [
    CommonModule,
    R387RoutingModule
  ]
})
export class R387Module { }
