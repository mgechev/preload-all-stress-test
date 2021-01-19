import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R462RoutingModule } from './r462-routing.module';
import { R462Component } from './r462.component';


@NgModule({
  declarations: [R462Component],
  imports: [
    CommonModule,
    R462RoutingModule
  ]
})
export class R462Module { }
