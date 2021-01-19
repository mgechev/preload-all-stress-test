import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R183RoutingModule } from './r183-routing.module';
import { R183Component } from './r183.component';


@NgModule({
  declarations: [R183Component],
  imports: [
    CommonModule,
    R183RoutingModule
  ]
})
export class R183Module { }
