import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R34Component } from './r34.component';

const routes: Routes = [{ path: '', component: R34Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R34RoutingModule { }
