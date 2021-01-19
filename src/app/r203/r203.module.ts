import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R203RoutingModule } from './r203-routing.module';
import { R203Component } from './r203.component';


@NgModule({
  declarations: [R203Component],
  imports: [
    CommonModule,
    R203RoutingModule
  ]
})
export class R203Module { }
