import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R448RoutingModule } from './r448-routing.module';
import { R448Component } from './r448.component';


@NgModule({
  declarations: [R448Component],
  imports: [
    CommonModule,
    R448RoutingModule
  ]
})
export class R448Module { }
