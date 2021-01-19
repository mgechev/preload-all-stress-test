import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R77RoutingModule } from './r77-routing.module';
import { R77Component } from './r77.component';


@NgModule({
  declarations: [R77Component],
  imports: [
    CommonModule,
    R77RoutingModule
  ]
})
export class R77Module { }
