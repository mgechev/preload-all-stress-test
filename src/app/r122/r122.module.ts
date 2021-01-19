import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R122RoutingModule } from './r122-routing.module';
import { R122Component } from './r122.component';


@NgModule({
  declarations: [R122Component],
  imports: [
    CommonModule,
    R122RoutingModule
  ]
})
export class R122Module { }
