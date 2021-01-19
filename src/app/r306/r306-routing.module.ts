import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R306Component } from './r306.component';

const routes: Routes = [{ path: '', component: R306Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R306RoutingModule { }
