import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R284Component } from './r284.component';

const routes: Routes = [{ path: '', component: R284Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R284RoutingModule { }
