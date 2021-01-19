import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R11RoutingModule } from './r11-routing.module';
import { R11Component } from './r11.component';


@NgModule({
  declarations: [R11Component],
  imports: [
    CommonModule,
    R11RoutingModule
  ]
})
export class R11Module { }
