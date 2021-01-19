import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R262RoutingModule } from './r262-routing.module';
import { R262Component } from './r262.component';


@NgModule({
  declarations: [R262Component],
  imports: [
    CommonModule,
    R262RoutingModule
  ]
})
export class R262Module { }
