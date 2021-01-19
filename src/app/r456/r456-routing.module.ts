import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R456Component } from './r456.component';

const routes: Routes = [{ path: '', component: R456Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R456RoutingModule { }
