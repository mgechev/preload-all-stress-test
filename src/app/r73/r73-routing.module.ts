import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R73Component } from './r73.component';

const routes: Routes = [{ path: '', component: R73Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R73RoutingModule { }
