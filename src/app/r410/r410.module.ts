import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R410RoutingModule } from './r410-routing.module';
import { R410Component } from './r410.component';


@NgModule({
  declarations: [R410Component],
  imports: [
    CommonModule,
    R410RoutingModule
  ]
})
export class R410Module { }
