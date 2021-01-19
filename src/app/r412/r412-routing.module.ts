import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R412Component } from './r412.component';

const routes: Routes = [{ path: '', component: R412Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R412RoutingModule { }
