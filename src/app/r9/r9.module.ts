import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R9RoutingModule } from './r9-routing.module';
import { R9Component } from './r9.component';


@NgModule({
  declarations: [R9Component],
  imports: [
    CommonModule,
    R9RoutingModule
  ]
})
export class R9Module { }
