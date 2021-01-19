import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R226RoutingModule } from './r226-routing.module';
import { R226Component } from './r226.component';


@NgModule({
  declarations: [R226Component],
  imports: [
    CommonModule,
    R226RoutingModule
  ]
})
export class R226Module { }
