import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R133RoutingModule } from './r133-routing.module';
import { R133Component } from './r133.component';


@NgModule({
  declarations: [R133Component],
  imports: [
    CommonModule,
    R133RoutingModule
  ]
})
export class R133Module { }
