import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R342RoutingModule } from './r342-routing.module';
import { R342Component } from './r342.component';


@NgModule({
  declarations: [R342Component],
  imports: [
    CommonModule,
    R342RoutingModule
  ]
})
export class R342Module { }
