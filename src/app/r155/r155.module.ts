import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R155RoutingModule } from './r155-routing.module';
import { R155Component } from './r155.component';


@NgModule({
  declarations: [R155Component],
  imports: [
    CommonModule,
    R155RoutingModule
  ]
})
export class R155Module { }
