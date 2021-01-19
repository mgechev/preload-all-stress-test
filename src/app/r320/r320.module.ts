import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R320RoutingModule } from './r320-routing.module';
import { R320Component } from './r320.component';


@NgModule({
  declarations: [R320Component],
  imports: [
    CommonModule,
    R320RoutingModule
  ]
})
export class R320Module { }
