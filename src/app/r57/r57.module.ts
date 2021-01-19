import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R57RoutingModule } from './r57-routing.module';
import { R57Component } from './r57.component';


@NgModule({
  declarations: [R57Component],
  imports: [
    CommonModule,
    R57RoutingModule
  ]
})
export class R57Module { }
