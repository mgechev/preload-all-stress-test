import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R81RoutingModule } from './r81-routing.module';
import { R81Component } from './r81.component';


@NgModule({
  declarations: [R81Component],
  imports: [
    CommonModule,
    R81RoutingModule
  ]
})
export class R81Module { }
