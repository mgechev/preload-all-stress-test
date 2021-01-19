import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R130RoutingModule } from './r130-routing.module';
import { R130Component } from './r130.component';


@NgModule({
  declarations: [R130Component],
  imports: [
    CommonModule,
    R130RoutingModule
  ]
})
export class R130Module { }
