import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R90RoutingModule } from './r90-routing.module';
import { R90Component } from './r90.component';


@NgModule({
  declarations: [R90Component],
  imports: [
    CommonModule,
    R90RoutingModule
  ]
})
export class R90Module { }
