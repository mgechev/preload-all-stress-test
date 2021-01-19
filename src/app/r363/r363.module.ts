import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R363RoutingModule } from './r363-routing.module';
import { R363Component } from './r363.component';


@NgModule({
  declarations: [R363Component],
  imports: [
    CommonModule,
    R363RoutingModule
  ]
})
export class R363Module { }
