import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R235RoutingModule } from './r235-routing.module';
import { R235Component } from './r235.component';


@NgModule({
  declarations: [R235Component],
  imports: [
    CommonModule,
    R235RoutingModule
  ]
})
export class R235Module { }
