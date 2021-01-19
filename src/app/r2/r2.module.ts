import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R2RoutingModule } from './r2-routing.module';
import { R2Component } from './r2.component';


@NgModule({
  declarations: [R2Component],
  imports: [
    CommonModule,
    R2RoutingModule
  ]
})
export class R2Module { }
