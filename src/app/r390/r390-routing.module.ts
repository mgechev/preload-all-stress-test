import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R390Component } from './r390.component';

const routes: Routes = [{ path: '', component: R390Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R390RoutingModule { }
