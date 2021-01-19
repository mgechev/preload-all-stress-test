import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R104RoutingModule } from './r104-routing.module';
import { R104Component } from './r104.component';


@NgModule({
  declarations: [R104Component],
  imports: [
    CommonModule,
    R104RoutingModule
  ]
})
export class R104Module { }
