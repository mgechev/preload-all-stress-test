import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R72Component } from './r72.component';

const routes: Routes = [{ path: '', component: R72Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R72RoutingModule { }
