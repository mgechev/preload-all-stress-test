import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R245RoutingModule } from './r245-routing.module';
import { R245Component } from './r245.component';


@NgModule({
  declarations: [R245Component],
  imports: [
    CommonModule,
    R245RoutingModule
  ]
})
export class R245Module { }
