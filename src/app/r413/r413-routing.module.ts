import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R413Component } from './r413.component';

const routes: Routes = [{ path: '', component: R413Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R413RoutingModule { }
