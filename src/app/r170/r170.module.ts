import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R170RoutingModule } from './r170-routing.module';
import { R170Component } from './r170.component';


@NgModule({
  declarations: [R170Component],
  imports: [
    CommonModule,
    R170RoutingModule
  ]
})
export class R170Module { }
