import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R83Component } from './r83.component';

const routes: Routes = [{ path: '', component: R83Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R83RoutingModule { }
