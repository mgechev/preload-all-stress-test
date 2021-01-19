import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R51Component } from './r51.component';

const routes: Routes = [{ path: '', component: R51Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R51RoutingModule { }
