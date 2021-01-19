import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R24RoutingModule } from './r24-routing.module';
import { R24Component } from './r24.component';


@NgModule({
  declarations: [R24Component],
  imports: [
    CommonModule,
    R24RoutingModule
  ]
})
export class R24Module { }
