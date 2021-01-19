import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R82Component } from './r82.component';

const routes: Routes = [{ path: '', component: R82Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R82RoutingModule { }
