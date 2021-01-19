import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R484RoutingModule } from './r484-routing.module';
import { R484Component } from './r484.component';


@NgModule({
  declarations: [R484Component],
  imports: [
    CommonModule,
    R484RoutingModule
  ]
})
export class R484Module { }
