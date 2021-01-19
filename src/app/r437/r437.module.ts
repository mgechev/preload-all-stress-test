import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R437RoutingModule } from './r437-routing.module';
import { R437Component } from './r437.component';


@NgModule({
  declarations: [R437Component],
  imports: [
    CommonModule,
    R437RoutingModule
  ]
})
export class R437Module { }
