import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R83RoutingModule } from './r83-routing.module';
import { R83Component } from './r83.component';


@NgModule({
  declarations: [R83Component],
  imports: [
    CommonModule,
    R83RoutingModule
  ]
})
export class R83Module { }
