import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R127RoutingModule } from './r127-routing.module';
import { R127Component } from './r127.component';


@NgModule({
  declarations: [R127Component],
  imports: [
    CommonModule,
    R127RoutingModule
  ]
})
export class R127Module { }
