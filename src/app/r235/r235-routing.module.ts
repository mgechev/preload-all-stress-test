import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R235Component } from './r235.component';

const routes: Routes = [{ path: '', component: R235Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R235RoutingModule { }
