import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R414RoutingModule } from './r414-routing.module';
import { R414Component } from './r414.component';


@NgModule({
  declarations: [R414Component],
  imports: [
    CommonModule,
    R414RoutingModule
  ]
})
export class R414Module { }
