import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R361RoutingModule } from './r361-routing.module';
import { R361Component } from './r361.component';


@NgModule({
  declarations: [R361Component],
  imports: [
    CommonModule,
    R361RoutingModule
  ]
})
export class R361Module { }
