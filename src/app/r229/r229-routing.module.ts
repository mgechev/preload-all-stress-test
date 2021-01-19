import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R229Component } from './r229.component';

const routes: Routes = [{ path: '', component: R229Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R229RoutingModule { }
