import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R92RoutingModule } from './r92-routing.module';
import { R92Component } from './r92.component';


@NgModule({
  declarations: [R92Component],
  imports: [
    CommonModule,
    R92RoutingModule
  ]
})
export class R92Module { }
