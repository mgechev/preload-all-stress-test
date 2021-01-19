import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R418Component } from './r418.component';

const routes: Routes = [{ path: '', component: R418Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R418RoutingModule { }
