import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R211RoutingModule } from './r211-routing.module';
import { R211Component } from './r211.component';


@NgModule({
  declarations: [R211Component],
  imports: [
    CommonModule,
    R211RoutingModule
  ]
})
export class R211Module { }
