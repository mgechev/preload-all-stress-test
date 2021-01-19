import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R406RoutingModule } from './r406-routing.module';
import { R406Component } from './r406.component';


@NgModule({
  declarations: [R406Component],
  imports: [
    CommonModule,
    R406RoutingModule
  ]
})
export class R406Module { }
