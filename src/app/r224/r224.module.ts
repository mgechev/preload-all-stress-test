import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R224RoutingModule } from './r224-routing.module';
import { R224Component } from './r224.component';


@NgModule({
  declarations: [R224Component],
  imports: [
    CommonModule,
    R224RoutingModule
  ]
})
export class R224Module { }
