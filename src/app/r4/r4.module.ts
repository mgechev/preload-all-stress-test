import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R4RoutingModule } from './r4-routing.module';
import { R4Component } from './r4.component';


@NgModule({
  declarations: [R4Component],
  imports: [
    CommonModule,
    R4RoutingModule
  ]
})
export class R4Module { }
