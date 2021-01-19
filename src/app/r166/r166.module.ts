import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R166RoutingModule } from './r166-routing.module';
import { R166Component } from './r166.component';


@NgModule({
  declarations: [R166Component],
  imports: [
    CommonModule,
    R166RoutingModule
  ]
})
export class R166Module { }
