import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R407RoutingModule } from './r407-routing.module';
import { R407Component } from './r407.component';


@NgModule({
  declarations: [R407Component],
  imports: [
    CommonModule,
    R407RoutingModule
  ]
})
export class R407Module { }
