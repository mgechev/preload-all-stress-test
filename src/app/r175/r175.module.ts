import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R175RoutingModule } from './r175-routing.module';
import { R175Component } from './r175.component';


@NgModule({
  declarations: [R175Component],
  imports: [
    CommonModule,
    R175RoutingModule
  ]
})
export class R175Module { }
