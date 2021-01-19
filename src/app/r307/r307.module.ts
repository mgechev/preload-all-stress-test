import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R307RoutingModule } from './r307-routing.module';
import { R307Component } from './r307.component';


@NgModule({
  declarations: [R307Component],
  imports: [
    CommonModule,
    R307RoutingModule
  ]
})
export class R307Module { }
