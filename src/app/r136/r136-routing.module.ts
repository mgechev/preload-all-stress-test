import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R136Component } from './r136.component';

const routes: Routes = [{ path: '', component: R136Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R136RoutingModule { }
