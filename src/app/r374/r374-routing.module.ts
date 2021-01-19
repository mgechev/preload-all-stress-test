import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R374Component } from './r374.component';

const routes: Routes = [{ path: '', component: R374Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R374RoutingModule { }
