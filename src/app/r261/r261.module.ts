import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R261RoutingModule } from './r261-routing.module';
import { R261Component } from './r261.component';


@NgModule({
  declarations: [R261Component],
  imports: [
    CommonModule,
    R261RoutingModule
  ]
})
export class R261Module { }
