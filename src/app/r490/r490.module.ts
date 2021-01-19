import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R490RoutingModule } from './r490-routing.module';
import { R490Component } from './r490.component';


@NgModule({
  declarations: [R490Component],
  imports: [
    CommonModule,
    R490RoutingModule
  ]
})
export class R490Module { }
