import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R232Component } from './r232.component';

const routes: Routes = [{ path: '', component: R232Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R232RoutingModule { }
