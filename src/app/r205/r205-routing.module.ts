import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R205Component } from './r205.component';

const routes: Routes = [{ path: '', component: R205Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R205RoutingModule { }
