import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R468RoutingModule } from './r468-routing.module';
import { R468Component } from './r468.component';


@NgModule({
  declarations: [R468Component],
  imports: [
    CommonModule,
    R468RoutingModule
  ]
})
export class R468Module { }
