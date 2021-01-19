import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R25RoutingModule } from './r25-routing.module';
import { R25Component } from './r25.component';


@NgModule({
  declarations: [R25Component],
  imports: [
    CommonModule,
    R25RoutingModule
  ]
})
export class R25Module { }
