import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R240RoutingModule } from './r240-routing.module';
import { R240Component } from './r240.component';


@NgModule({
  declarations: [R240Component],
  imports: [
    CommonModule,
    R240RoutingModule
  ]
})
export class R240Module { }
