import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R305RoutingModule } from './r305-routing.module';
import { R305Component } from './r305.component';


@NgModule({
  declarations: [R305Component],
  imports: [
    CommonModule,
    R305RoutingModule
  ]
})
export class R305Module { }
