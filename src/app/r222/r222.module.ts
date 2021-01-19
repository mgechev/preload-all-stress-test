import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R222RoutingModule } from './r222-routing.module';
import { R222Component } from './r222.component';


@NgModule({
  declarations: [R222Component],
  imports: [
    CommonModule,
    R222RoutingModule
  ]
})
export class R222Module { }
