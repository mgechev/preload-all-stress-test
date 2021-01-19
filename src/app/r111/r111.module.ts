import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R111RoutingModule } from './r111-routing.module';
import { R111Component } from './r111.component';


@NgModule({
  declarations: [R111Component],
  imports: [
    CommonModule,
    R111RoutingModule
  ]
})
export class R111Module { }
