import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R27RoutingModule } from './r27-routing.module';
import { R27Component } from './r27.component';


@NgModule({
  declarations: [R27Component],
  imports: [
    CommonModule,
    R27RoutingModule
  ]
})
export class R27Module { }
