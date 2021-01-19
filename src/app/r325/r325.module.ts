import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R325RoutingModule } from './r325-routing.module';
import { R325Component } from './r325.component';


@NgModule({
  declarations: [R325Component],
  imports: [
    CommonModule,
    R325RoutingModule
  ]
})
export class R325Module { }
