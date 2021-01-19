import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R253RoutingModule } from './r253-routing.module';
import { R253Component } from './r253.component';


@NgModule({
  declarations: [R253Component],
  imports: [
    CommonModule,
    R253RoutingModule
  ]
})
export class R253Module { }
