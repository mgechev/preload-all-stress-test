import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R334Component } from './r334.component';

const routes: Routes = [{ path: '', component: R334Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R334RoutingModule { }
