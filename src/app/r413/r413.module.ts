import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R413RoutingModule } from './r413-routing.module';
import { R413Component } from './r413.component';


@NgModule({
  declarations: [R413Component],
  imports: [
    CommonModule,
    R413RoutingModule
  ]
})
export class R413Module { }
