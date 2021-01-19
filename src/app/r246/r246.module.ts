import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R246RoutingModule } from './r246-routing.module';
import { R246Component } from './r246.component';


@NgModule({
  declarations: [R246Component],
  imports: [
    CommonModule,
    R246RoutingModule
  ]
})
export class R246Module { }
