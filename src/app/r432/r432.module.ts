import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R432RoutingModule } from './r432-routing.module';
import { R432Component } from './r432.component';


@NgModule({
  declarations: [R432Component],
  imports: [
    CommonModule,
    R432RoutingModule
  ]
})
export class R432Module { }
