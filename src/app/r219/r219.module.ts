import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R219RoutingModule } from './r219-routing.module';
import { R219Component } from './r219.component';


@NgModule({
  declarations: [R219Component],
  imports: [
    CommonModule,
    R219RoutingModule
  ]
})
export class R219Module { }
