import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R87RoutingModule } from './r87-routing.module';
import { R87Component } from './r87.component';


@NgModule({
  declarations: [R87Component],
  imports: [
    CommonModule,
    R87RoutingModule
  ]
})
export class R87Module { }
