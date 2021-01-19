import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R215RoutingModule } from './r215-routing.module';
import { R215Component } from './r215.component';


@NgModule({
  declarations: [R215Component],
  imports: [
    CommonModule,
    R215RoutingModule
  ]
})
export class R215Module { }
