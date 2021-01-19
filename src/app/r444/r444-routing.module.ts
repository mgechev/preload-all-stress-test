import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R444Component } from './r444.component';

const routes: Routes = [{ path: '', component: R444Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R444RoutingModule { }
