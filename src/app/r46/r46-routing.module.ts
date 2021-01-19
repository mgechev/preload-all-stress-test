import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R46Component } from './r46.component';

const routes: Routes = [{ path: '', component: R46Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R46RoutingModule { }
