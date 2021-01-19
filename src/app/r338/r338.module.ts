import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R338RoutingModule } from './r338-routing.module';
import { R338Component } from './r338.component';


@NgModule({
  declarations: [R338Component],
  imports: [
    CommonModule,
    R338RoutingModule
  ]
})
export class R338Module { }
