import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R344Component } from './r344.component';

const routes: Routes = [{ path: '', component: R344Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R344RoutingModule { }
