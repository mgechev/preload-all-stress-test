import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R308RoutingModule } from './r308-routing.module';
import { R308Component } from './r308.component';


@NgModule({
  declarations: [R308Component],
  imports: [
    CommonModule,
    R308RoutingModule
  ]
})
export class R308Module { }
