import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R421RoutingModule } from './r421-routing.module';
import { R421Component } from './r421.component';


@NgModule({
  declarations: [R421Component],
  imports: [
    CommonModule,
    R421RoutingModule
  ]
})
export class R421Module { }
