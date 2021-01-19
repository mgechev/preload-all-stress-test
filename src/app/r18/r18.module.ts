import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R18RoutingModule } from './r18-routing.module';
import { R18Component } from './r18.component';


@NgModule({
  declarations: [R18Component],
  imports: [
    CommonModule,
    R18RoutingModule
  ]
})
export class R18Module { }
