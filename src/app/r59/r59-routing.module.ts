import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R59Component } from './r59.component';

const routes: Routes = [{ path: '', component: R59Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R59RoutingModule { }
