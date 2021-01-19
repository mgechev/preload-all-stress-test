import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R330RoutingModule } from './r330-routing.module';
import { R330Component } from './r330.component';


@NgModule({
  declarations: [R330Component],
  imports: [
    CommonModule,
    R330RoutingModule
  ]
})
export class R330Module { }
