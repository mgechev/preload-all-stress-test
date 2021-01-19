import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R37RoutingModule } from './r37-routing.module';
import { R37Component } from './r37.component';


@NgModule({
  declarations: [R37Component],
  imports: [
    CommonModule,
    R37RoutingModule
  ]
})
export class R37Module { }
