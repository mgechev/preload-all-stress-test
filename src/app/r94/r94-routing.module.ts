import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R94Component } from './r94.component';

const routes: Routes = [{ path: '', component: R94Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R94RoutingModule { }
