import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R434Component } from './r434.component';

const routes: Routes = [{ path: '', component: R434Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R434RoutingModule { }
