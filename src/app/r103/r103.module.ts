import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R103RoutingModule } from './r103-routing.module';
import { R103Component } from './r103.component';


@NgModule({
  declarations: [R103Component],
  imports: [
    CommonModule,
    R103RoutingModule
  ]
})
export class R103Module { }
