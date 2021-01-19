import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R91RoutingModule } from './r91-routing.module';
import { R91Component } from './r91.component';


@NgModule({
  declarations: [R91Component],
  imports: [
    CommonModule,
    R91RoutingModule
  ]
})
export class R91Module { }
