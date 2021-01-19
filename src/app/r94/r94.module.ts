import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R94RoutingModule } from './r94-routing.module';
import { R94Component } from './r94.component';


@NgModule({
  declarations: [R94Component],
  imports: [
    CommonModule,
    R94RoutingModule
  ]
})
export class R94Module { }
