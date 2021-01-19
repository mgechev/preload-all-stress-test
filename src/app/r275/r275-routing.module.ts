import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R275Component } from './r275.component';

const routes: Routes = [{ path: '', component: R275Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R275RoutingModule { }
