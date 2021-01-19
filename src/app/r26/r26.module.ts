import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R26RoutingModule } from './r26-routing.module';
import { R26Component } from './r26.component';


@NgModule({
  declarations: [R26Component],
  imports: [
    CommonModule,
    R26RoutingModule
  ]
})
export class R26Module { }
