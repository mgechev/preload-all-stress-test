import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R12Component } from './r12.component';

const routes: Routes = [{ path: '', component: R12Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R12RoutingModule { }
