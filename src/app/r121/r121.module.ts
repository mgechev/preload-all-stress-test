import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R121RoutingModule } from './r121-routing.module';
import { R121Component } from './r121.component';


@NgModule({
  declarations: [R121Component],
  imports: [
    CommonModule,
    R121RoutingModule
  ]
})
export class R121Module { }
