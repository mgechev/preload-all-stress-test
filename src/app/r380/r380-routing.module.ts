import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R380Component } from './r380.component';

const routes: Routes = [{ path: '', component: R380Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R380RoutingModule { }
