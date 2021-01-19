import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R64RoutingModule } from './r64-routing.module';
import { R64Component } from './r64.component';


@NgModule({
  declarations: [R64Component],
  imports: [
    CommonModule,
    R64RoutingModule
  ]
})
export class R64Module { }
