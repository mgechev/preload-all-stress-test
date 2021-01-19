import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R70RoutingModule } from './r70-routing.module';
import { R70Component } from './r70.component';


@NgModule({
  declarations: [R70Component],
  imports: [
    CommonModule,
    R70RoutingModule
  ]
})
export class R70Module { }
