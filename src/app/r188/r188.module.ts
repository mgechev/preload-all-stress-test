import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R188RoutingModule } from './r188-routing.module';
import { R188Component } from './r188.component';


@NgModule({
  declarations: [R188Component],
  imports: [
    CommonModule,
    R188RoutingModule
  ]
})
export class R188Module { }
