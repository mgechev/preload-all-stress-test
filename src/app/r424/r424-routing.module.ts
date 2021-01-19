import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R424Component } from './r424.component';

const routes: Routes = [{ path: '', component: R424Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R424RoutingModule { }
