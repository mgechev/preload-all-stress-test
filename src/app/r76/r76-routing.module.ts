import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R76Component } from './r76.component';

const routes: Routes = [{ path: '', component: R76Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R76RoutingModule { }
