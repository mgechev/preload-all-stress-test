import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R370RoutingModule } from './r370-routing.module';
import { R370Component } from './r370.component';


@NgModule({
  declarations: [R370Component],
  imports: [
    CommonModule,
    R370RoutingModule
  ]
})
export class R370Module { }
