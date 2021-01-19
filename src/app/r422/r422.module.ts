import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R422RoutingModule } from './r422-routing.module';
import { R422Component } from './r422.component';


@NgModule({
  declarations: [R422Component],
  imports: [
    CommonModule,
    R422RoutingModule
  ]
})
export class R422Module { }
