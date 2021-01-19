import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R200Component } from './r200.component';

const routes: Routes = [{ path: '', component: R200Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R200RoutingModule { }
