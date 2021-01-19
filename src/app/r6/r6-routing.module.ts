import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R6Component } from './r6.component';

const routes: Routes = [{ path: '', component: R6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R6RoutingModule { }
