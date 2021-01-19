import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R341RoutingModule } from './r341-routing.module';
import { R341Component } from './r341.component';


@NgModule({
  declarations: [R341Component],
  imports: [
    CommonModule,
    R341RoutingModule
  ]
})
export class R341Module { }
