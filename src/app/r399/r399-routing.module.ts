import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R399Component } from './r399.component';

const routes: Routes = [{ path: '', component: R399Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R399RoutingModule { }
