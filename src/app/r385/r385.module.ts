import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R385RoutingModule } from './r385-routing.module';
import { R385Component } from './r385.component';


@NgModule({
  declarations: [R385Component],
  imports: [
    CommonModule,
    R385RoutingModule
  ]
})
export class R385Module { }
