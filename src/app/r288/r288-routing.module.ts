import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R288Component } from './r288.component';

const routes: Routes = [{ path: '', component: R288Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R288RoutingModule { }
