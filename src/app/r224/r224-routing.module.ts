import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R224Component } from './r224.component';

const routes: Routes = [{ path: '', component: R224Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R224RoutingModule { }
