import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R5RoutingModule } from './r5-routing.module';
import { R5Component } from './r5.component';


@NgModule({
  declarations: [R5Component],
  imports: [
    CommonModule,
    R5RoutingModule
  ]
})
export class R5Module { }
