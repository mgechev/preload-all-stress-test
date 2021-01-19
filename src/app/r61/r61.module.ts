import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R61RoutingModule } from './r61-routing.module';
import { R61Component } from './r61.component';


@NgModule({
  declarations: [R61Component],
  imports: [
    CommonModule,
    R61RoutingModule
  ]
})
export class R61Module { }
