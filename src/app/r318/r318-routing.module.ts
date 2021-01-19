import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R318Component } from './r318.component';

const routes: Routes = [{ path: '', component: R318Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R318RoutingModule { }
