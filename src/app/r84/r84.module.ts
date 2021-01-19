import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R84RoutingModule } from './r84-routing.module';
import { R84Component } from './r84.component';


@NgModule({
  declarations: [R84Component],
  imports: [
    CommonModule,
    R84RoutingModule
  ]
})
export class R84Module { }
