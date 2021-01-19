import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R316RoutingModule } from './r316-routing.module';
import { R316Component } from './r316.component';


@NgModule({
  declarations: [R316Component],
  imports: [
    CommonModule,
    R316RoutingModule
  ]
})
export class R316Module { }
