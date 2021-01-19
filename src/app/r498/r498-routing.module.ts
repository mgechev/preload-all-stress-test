import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R498Component } from './r498.component';

const routes: Routes = [{ path: '', component: R498Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R498RoutingModule { }
