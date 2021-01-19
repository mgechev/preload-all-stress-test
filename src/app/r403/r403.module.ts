import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R403RoutingModule } from './r403-routing.module';
import { R403Component } from './r403.component';


@NgModule({
  declarations: [R403Component],
  imports: [
    CommonModule,
    R403RoutingModule
  ]
})
export class R403Module { }
