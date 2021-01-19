import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R341Component } from './r341.component';

const routes: Routes = [{ path: '', component: R341Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R341RoutingModule { }
