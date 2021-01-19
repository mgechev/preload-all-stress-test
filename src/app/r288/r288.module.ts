import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R288RoutingModule } from './r288-routing.module';
import { R288Component } from './r288.component';


@NgModule({
  declarations: [R288Component],
  imports: [
    CommonModule,
    R288RoutingModule
  ]
})
export class R288Module { }
