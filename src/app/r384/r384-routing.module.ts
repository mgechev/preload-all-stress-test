import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R384Component } from './r384.component';

const routes: Routes = [{ path: '', component: R384Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R384RoutingModule { }
