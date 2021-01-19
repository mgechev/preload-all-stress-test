import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R205RoutingModule } from './r205-routing.module';
import { R205Component } from './r205.component';


@NgModule({
  declarations: [R205Component],
  imports: [
    CommonModule,
    R205RoutingModule
  ]
})
export class R205Module { }
