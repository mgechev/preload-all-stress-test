import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R485RoutingModule } from './r485-routing.module';
import { R485Component } from './r485.component';


@NgModule({
  declarations: [R485Component],
  imports: [
    CommonModule,
    R485RoutingModule
  ]
})
export class R485Module { }
