import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R375Component } from './r375.component';

const routes: Routes = [{ path: '', component: R375Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R375RoutingModule { }
