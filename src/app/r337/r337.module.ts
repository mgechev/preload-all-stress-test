import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R337RoutingModule } from './r337-routing.module';
import { R337Component } from './r337.component';


@NgModule({
  declarations: [R337Component],
  imports: [
    CommonModule,
    R337RoutingModule
  ]
})
export class R337Module { }
