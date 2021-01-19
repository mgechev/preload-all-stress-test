import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R108RoutingModule } from './r108-routing.module';
import { R108Component } from './r108.component';


@NgModule({
  declarations: [R108Component],
  imports: [
    CommonModule,
    R108RoutingModule
  ]
})
export class R108Module { }
