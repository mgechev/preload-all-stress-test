import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R10RoutingModule } from './r10-routing.module';
import { R10Component } from './r10.component';


@NgModule({
  declarations: [R10Component],
  imports: [
    CommonModule,
    R10RoutingModule
  ]
})
export class R10Module { }
