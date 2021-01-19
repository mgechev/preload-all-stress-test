import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R114RoutingModule } from './r114-routing.module';
import { R114Component } from './r114.component';


@NgModule({
  declarations: [R114Component],
  imports: [
    CommonModule,
    R114RoutingModule
  ]
})
export class R114Module { }
