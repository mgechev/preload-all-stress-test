import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R32RoutingModule } from './r32-routing.module';
import { R32Component } from './r32.component';


@NgModule({
  declarations: [R32Component],
  imports: [
    CommonModule,
    R32RoutingModule
  ]
})
export class R32Module { }
