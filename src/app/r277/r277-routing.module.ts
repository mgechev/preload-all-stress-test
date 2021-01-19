import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R277Component } from './r277.component';

const routes: Routes = [{ path: '', component: R277Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R277RoutingModule { }
