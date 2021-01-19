import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R99RoutingModule } from './r99-routing.module';
import { R99Component } from './r99.component';


@NgModule({
  declarations: [R99Component],
  imports: [
    CommonModule,
    R99RoutingModule
  ]
})
export class R99Module { }
