import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R105RoutingModule } from './r105-routing.module';
import { R105Component } from './r105.component';


@NgModule({
  declarations: [R105Component],
  imports: [
    CommonModule,
    R105RoutingModule
  ]
})
export class R105Module { }
