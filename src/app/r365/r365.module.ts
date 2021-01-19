import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R365RoutingModule } from './r365-routing.module';
import { R365Component } from './r365.component';


@NgModule({
  declarations: [R365Component],
  imports: [
    CommonModule,
    R365RoutingModule
  ]
})
export class R365Module { }
