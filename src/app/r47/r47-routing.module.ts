import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R47Component } from './r47.component';

const routes: Routes = [{ path: '', component: R47Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R47RoutingModule { }
