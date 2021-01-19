import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R170Component } from './r170.component';

const routes: Routes = [{ path: '', component: R170Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R170RoutingModule { }
