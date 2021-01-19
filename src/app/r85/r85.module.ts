import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R85RoutingModule } from './r85-routing.module';
import { R85Component } from './r85.component';


@NgModule({
  declarations: [R85Component],
  imports: [
    CommonModule,
    R85RoutingModule
  ]
})
export class R85Module { }
