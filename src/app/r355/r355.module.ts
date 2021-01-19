import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R355RoutingModule } from './r355-routing.module';
import { R355Component } from './r355.component';


@NgModule({
  declarations: [R355Component],
  imports: [
    CommonModule,
    R355RoutingModule
  ]
})
export class R355Module { }
