import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R68RoutingModule } from './r68-routing.module';
import { R68Component } from './r68.component';


@NgModule({
  declarations: [R68Component],
  imports: [
    CommonModule,
    R68RoutingModule
  ]
})
export class R68Module { }
