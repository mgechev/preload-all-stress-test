import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R331RoutingModule } from './r331-routing.module';
import { R331Component } from './r331.component';


@NgModule({
  declarations: [R331Component],
  imports: [
    CommonModule,
    R331RoutingModule
  ]
})
export class R331Module { }
