import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R355Component } from './r355.component';

const routes: Routes = [{ path: '', component: R355Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R355RoutingModule { }
