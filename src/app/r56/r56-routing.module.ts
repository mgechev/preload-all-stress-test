import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R56Component } from './r56.component';

const routes: Routes = [{ path: '', component: R56Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R56RoutingModule { }
