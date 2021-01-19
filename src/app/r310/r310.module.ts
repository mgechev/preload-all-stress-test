import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R310RoutingModule } from './r310-routing.module';
import { R310Component } from './r310.component';


@NgModule({
  declarations: [R310Component],
  imports: [
    CommonModule,
    R310RoutingModule
  ]
})
export class R310Module { }
