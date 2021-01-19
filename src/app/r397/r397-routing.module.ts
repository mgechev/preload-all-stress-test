import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R397Component } from './r397.component';

const routes: Routes = [{ path: '', component: R397Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R397RoutingModule { }
