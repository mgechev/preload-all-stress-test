import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R143RoutingModule } from './r143-routing.module';
import { R143Component } from './r143.component';


@NgModule({
  declarations: [R143Component],
  imports: [
    CommonModule,
    R143RoutingModule
  ]
})
export class R143Module { }
