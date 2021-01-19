import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R202RoutingModule } from './r202-routing.module';
import { R202Component } from './r202.component';


@NgModule({
  declarations: [R202Component],
  imports: [
    CommonModule,
    R202RoutingModule
  ]
})
export class R202Module { }
