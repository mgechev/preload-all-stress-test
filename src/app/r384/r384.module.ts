import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R384RoutingModule } from './r384-routing.module';
import { R384Component } from './r384.component';


@NgModule({
  declarations: [R384Component],
  imports: [
    CommonModule,
    R384RoutingModule
  ]
})
export class R384Module { }
