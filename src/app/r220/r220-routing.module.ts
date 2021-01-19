import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R220Component } from './r220.component';

const routes: Routes = [{ path: '', component: R220Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R220RoutingModule { }
