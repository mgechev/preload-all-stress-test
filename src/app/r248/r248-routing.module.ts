import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R248Component } from './r248.component';

const routes: Routes = [{ path: '', component: R248Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R248RoutingModule { }
