import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R343RoutingModule } from './r343-routing.module';
import { R343Component } from './r343.component';


@NgModule({
  declarations: [R343Component],
  imports: [
    CommonModule,
    R343RoutingModule
  ]
})
export class R343Module { }
