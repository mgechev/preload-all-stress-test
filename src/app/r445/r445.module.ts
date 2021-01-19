import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R445RoutingModule } from './r445-routing.module';
import { R445Component } from './r445.component';


@NgModule({
  declarations: [R445Component],
  imports: [
    CommonModule,
    R445RoutingModule
  ]
})
export class R445Module { }
