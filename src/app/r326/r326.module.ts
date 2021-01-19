import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R326RoutingModule } from './r326-routing.module';
import { R326Component } from './r326.component';


@NgModule({
  declarations: [R326Component],
  imports: [
    CommonModule,
    R326RoutingModule
  ]
})
export class R326Module { }
