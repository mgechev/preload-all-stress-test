import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R33RoutingModule } from './r33-routing.module';
import { R33Component } from './r33.component';


@NgModule({
  declarations: [R33Component],
  imports: [
    CommonModule,
    R33RoutingModule
  ]
})
export class R33Module { }
