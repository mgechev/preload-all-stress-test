import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R152Component } from './r152.component';

const routes: Routes = [{ path: '', component: R152Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R152RoutingModule { }
