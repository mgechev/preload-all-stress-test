import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R96RoutingModule } from './r96-routing.module';
import { R96Component } from './r96.component';


@NgModule({
  declarations: [R96Component],
  imports: [
    CommonModule,
    R96RoutingModule
  ]
})
export class R96Module { }
