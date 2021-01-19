import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R467Component } from './r467.component';

const routes: Routes = [{ path: '', component: R467Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R467RoutingModule { }
