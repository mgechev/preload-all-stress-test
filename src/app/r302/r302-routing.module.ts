import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R302Component } from './r302.component';

const routes: Routes = [{ path: '', component: R302Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R302RoutingModule { }
