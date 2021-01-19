import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R323RoutingModule } from './r323-routing.module';
import { R323Component } from './r323.component';


@NgModule({
  declarations: [R323Component],
  imports: [
    CommonModule,
    R323RoutingModule
  ]
})
export class R323Module { }
