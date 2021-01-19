import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R118Component } from './r118.component';

const routes: Routes = [{ path: '', component: R118Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R118RoutingModule { }
