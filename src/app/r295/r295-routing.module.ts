import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R295Component } from './r295.component';

const routes: Routes = [{ path: '', component: R295Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R295RoutingModule { }
