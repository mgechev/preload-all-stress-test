import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R17RoutingModule } from './r17-routing.module';
import { R17Component } from './r17.component';


@NgModule({
  declarations: [R17Component],
  imports: [
    CommonModule,
    R17RoutingModule
  ]
})
export class R17Module { }
