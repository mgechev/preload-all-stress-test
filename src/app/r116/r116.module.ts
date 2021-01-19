import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R116RoutingModule } from './r116-routing.module';
import { R116Component } from './r116.component';


@NgModule({
  declarations: [R116Component],
  imports: [
    CommonModule,
    R116RoutingModule
  ]
})
export class R116Module { }
