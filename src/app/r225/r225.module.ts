import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R225RoutingModule } from './r225-routing.module';
import { R225Component } from './r225.component';


@NgModule({
  declarations: [R225Component],
  imports: [
    CommonModule,
    R225RoutingModule
  ]
})
export class R225Module { }
