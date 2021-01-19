import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R252Component } from './r252.component';

const routes: Routes = [{ path: '', component: R252Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R252RoutingModule { }
