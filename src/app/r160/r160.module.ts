import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R160RoutingModule } from './r160-routing.module';
import { R160Component } from './r160.component';


@NgModule({
  declarations: [R160Component],
  imports: [
    CommonModule,
    R160RoutingModule
  ]
})
export class R160Module { }
