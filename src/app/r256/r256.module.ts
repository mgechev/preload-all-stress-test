import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R256RoutingModule } from './r256-routing.module';
import { R256Component } from './r256.component';


@NgModule({
  declarations: [R256Component],
  imports: [
    CommonModule,
    R256RoutingModule
  ]
})
export class R256Module { }
