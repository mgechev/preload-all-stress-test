import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R408Component } from './r408.component';

const routes: Routes = [{ path: '', component: R408Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R408RoutingModule { }
