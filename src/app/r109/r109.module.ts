import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R109RoutingModule } from './r109-routing.module';
import { R109Component } from './r109.component';


@NgModule({
  declarations: [R109Component],
  imports: [
    CommonModule,
    R109RoutingModule
  ]
})
export class R109Module { }
