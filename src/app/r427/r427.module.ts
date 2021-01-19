import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R427RoutingModule } from './r427-routing.module';
import { R427Component } from './r427.component';


@NgModule({
  declarations: [R427Component],
  imports: [
    CommonModule,
    R427RoutingModule
  ]
})
export class R427Module { }
