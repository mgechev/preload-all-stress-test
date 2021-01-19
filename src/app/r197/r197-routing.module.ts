import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R197Component } from './r197.component';

const routes: Routes = [{ path: '', component: R197Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R197RoutingModule { }
