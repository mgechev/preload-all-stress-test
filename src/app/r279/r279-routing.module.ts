import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R279Component } from './r279.component';

const routes: Routes = [{ path: '', component: R279Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R279RoutingModule { }
