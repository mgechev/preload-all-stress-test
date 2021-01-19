import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R190RoutingModule } from './r190-routing.module';
import { R190Component } from './r190.component';


@NgModule({
  declarations: [R190Component],
  imports: [
    CommonModule,
    R190RoutingModule
  ]
})
export class R190Module { }
