import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R157Component } from './r157.component';

const routes: Routes = [{ path: '', component: R157Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R157RoutingModule { }
