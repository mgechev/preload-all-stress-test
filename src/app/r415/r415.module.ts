import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R415RoutingModule } from './r415-routing.module';
import { R415Component } from './r415.component';


@NgModule({
  declarations: [R415Component],
  imports: [
    CommonModule,
    R415RoutingModule
  ]
})
export class R415Module { }
