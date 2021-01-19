import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R99Component } from './r99.component';

const routes: Routes = [{ path: '', component: R99Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R99RoutingModule { }
