import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R96Component } from './r96.component';

const routes: Routes = [{ path: '', component: R96Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R96RoutingModule { }
