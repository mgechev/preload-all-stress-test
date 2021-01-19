import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R327RoutingModule } from './r327-routing.module';
import { R327Component } from './r327.component';


@NgModule({
  declarations: [R327Component],
  imports: [
    CommonModule,
    R327RoutingModule
  ]
})
export class R327Module { }
