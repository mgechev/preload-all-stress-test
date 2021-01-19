import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R57Component } from './r57.component';

const routes: Routes = [{ path: '', component: R57Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R57RoutingModule { }
