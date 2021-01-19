import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R285Component } from './r285.component';

const routes: Routes = [{ path: '', component: R285Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R285RoutingModule { }
