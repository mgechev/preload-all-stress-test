import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R287RoutingModule } from './r287-routing.module';
import { R287Component } from './r287.component';


@NgModule({
  declarations: [R287Component],
  imports: [
    CommonModule,
    R287RoutingModule
  ]
})
export class R287Module { }
