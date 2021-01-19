import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R139RoutingModule } from './r139-routing.module';
import { R139Component } from './r139.component';


@NgModule({
  declarations: [R139Component],
  imports: [
    CommonModule,
    R139RoutingModule
  ]
})
export class R139Module { }
