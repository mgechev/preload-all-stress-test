import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R56RoutingModule } from './r56-routing.module';
import { R56Component } from './r56.component';


@NgModule({
  declarations: [R56Component],
  imports: [
    CommonModule,
    R56RoutingModule
  ]
})
export class R56Module { }
