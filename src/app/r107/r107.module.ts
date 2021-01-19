import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R107RoutingModule } from './r107-routing.module';
import { R107Component } from './r107.component';


@NgModule({
  declarations: [R107Component],
  imports: [
    CommonModule,
    R107RoutingModule
  ]
})
export class R107Module { }
