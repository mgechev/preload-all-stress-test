import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R290Component } from './r290.component';

const routes: Routes = [{ path: '', component: R290Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R290RoutingModule { }
