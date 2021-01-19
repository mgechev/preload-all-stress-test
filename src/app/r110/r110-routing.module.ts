import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R110Component } from './r110.component';

const routes: Routes = [{ path: '', component: R110Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R110RoutingModule { }
