import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R488RoutingModule } from './r488-routing.module';
import { R488Component } from './r488.component';


@NgModule({
  declarations: [R488Component],
  imports: [
    CommonModule,
    R488RoutingModule
  ]
})
export class R488Module { }
