import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R12RoutingModule } from './r12-routing.module';
import { R12Component } from './r12.component';


@NgModule({
  declarations: [R12Component],
  imports: [
    CommonModule,
    R12RoutingModule
  ]
})
export class R12Module { }
