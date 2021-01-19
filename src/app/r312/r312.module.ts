import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R312RoutingModule } from './r312-routing.module';
import { R312Component } from './r312.component';


@NgModule({
  declarations: [R312Component],
  imports: [
    CommonModule,
    R312RoutingModule
  ]
})
export class R312Module { }
