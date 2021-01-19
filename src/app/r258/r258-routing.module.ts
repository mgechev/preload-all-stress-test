import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R258Component } from './r258.component';

const routes: Routes = [{ path: '', component: R258Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R258RoutingModule { }
