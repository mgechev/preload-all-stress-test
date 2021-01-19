import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R10Component } from './r10.component';

const routes: Routes = [{ path: '', component: R10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R10RoutingModule { }
