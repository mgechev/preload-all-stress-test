import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R335Component } from './r335.component';

const routes: Routes = [{ path: '', component: R335Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R335RoutingModule { }
