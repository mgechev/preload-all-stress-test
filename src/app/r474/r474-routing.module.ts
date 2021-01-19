import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R474Component } from './r474.component';

const routes: Routes = [{ path: '', component: R474Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R474RoutingModule { }
