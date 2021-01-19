import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R158Component } from './r158.component';

const routes: Routes = [{ path: '', component: R158Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R158RoutingModule { }
