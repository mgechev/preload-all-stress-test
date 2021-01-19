import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R444RoutingModule } from './r444-routing.module';
import { R444Component } from './r444.component';


@NgModule({
  declarations: [R444Component],
  imports: [
    CommonModule,
    R444RoutingModule
  ]
})
export class R444Module { }
