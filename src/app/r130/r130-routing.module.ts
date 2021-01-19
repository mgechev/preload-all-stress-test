import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R130Component } from './r130.component';

const routes: Routes = [{ path: '', component: R130Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R130RoutingModule { }
