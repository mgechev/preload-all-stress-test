import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R285RoutingModule } from './r285-routing.module';
import { R285Component } from './r285.component';


@NgModule({
  declarations: [R285Component],
  imports: [
    CommonModule,
    R285RoutingModule
  ]
})
export class R285Module { }
