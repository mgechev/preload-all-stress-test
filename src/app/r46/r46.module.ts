import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R46RoutingModule } from './r46-routing.module';
import { R46Component } from './r46.component';


@NgModule({
  declarations: [R46Component],
  imports: [
    CommonModule,
    R46RoutingModule
  ]
})
export class R46Module { }
