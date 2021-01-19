import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R390RoutingModule } from './r390-routing.module';
import { R390Component } from './r390.component';


@NgModule({
  declarations: [R390Component],
  imports: [
    CommonModule,
    R390RoutingModule
  ]
})
export class R390Module { }
