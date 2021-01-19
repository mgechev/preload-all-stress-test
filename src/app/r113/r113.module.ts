import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R113RoutingModule } from './r113-routing.module';
import { R113Component } from './r113.component';


@NgModule({
  declarations: [R113Component],
  imports: [
    CommonModule,
    R113RoutingModule
  ]
})
export class R113Module { }
