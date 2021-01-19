import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R136RoutingModule } from './r136-routing.module';
import { R136Component } from './r136.component';


@NgModule({
  declarations: [R136Component],
  imports: [
    CommonModule,
    R136RoutingModule
  ]
})
export class R136Module { }
