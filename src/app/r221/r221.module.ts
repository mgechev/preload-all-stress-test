import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R221RoutingModule } from './r221-routing.module';
import { R221Component } from './r221.component';


@NgModule({
  declarations: [R221Component],
  imports: [
    CommonModule,
    R221RoutingModule
  ]
})
export class R221Module { }
