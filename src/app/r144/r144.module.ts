import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R144RoutingModule } from './r144-routing.module';
import { R144Component } from './r144.component';


@NgModule({
  declarations: [R144Component],
  imports: [
    CommonModule,
    R144RoutingModule
  ]
})
export class R144Module { }
