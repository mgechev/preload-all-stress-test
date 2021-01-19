import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R16RoutingModule } from './r16-routing.module';
import { R16Component } from './r16.component';


@NgModule({
  declarations: [R16Component],
  imports: [
    CommonModule,
    R16RoutingModule
  ]
})
export class R16Module { }
