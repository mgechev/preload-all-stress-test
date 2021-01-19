import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R328RoutingModule } from './r328-routing.module';
import { R328Component } from './r328.component';


@NgModule({
  declarations: [R328Component],
  imports: [
    CommonModule,
    R328RoutingModule
  ]
})
export class R328Module { }
