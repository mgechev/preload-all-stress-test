import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R432Component } from './r432.component';

const routes: Routes = [{ path: '', component: R432Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R432RoutingModule { }
