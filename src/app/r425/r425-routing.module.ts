import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R425Component } from './r425.component';

const routes: Routes = [{ path: '', component: R425Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R425RoutingModule { }
