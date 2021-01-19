import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R79RoutingModule } from './r79-routing.module';
import { R79Component } from './r79.component';


@NgModule({
  declarations: [R79Component],
  imports: [
    CommonModule,
    R79RoutingModule
  ]
})
export class R79Module { }
