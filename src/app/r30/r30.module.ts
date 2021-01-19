import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R30RoutingModule } from './r30-routing.module';
import { R30Component } from './r30.component';


@NgModule({
  declarations: [R30Component],
  imports: [
    CommonModule,
    R30RoutingModule
  ]
})
export class R30Module { }
