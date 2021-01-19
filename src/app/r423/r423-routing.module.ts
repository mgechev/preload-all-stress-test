import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R423Component } from './r423.component';

const routes: Routes = [{ path: '', component: R423Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R423RoutingModule { }
