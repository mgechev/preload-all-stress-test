import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R212RoutingModule } from './r212-routing.module';
import { R212Component } from './r212.component';


@NgModule({
  declarations: [R212Component],
  imports: [
    CommonModule,
    R212RoutingModule
  ]
})
export class R212Module { }
