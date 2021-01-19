import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R372Component } from './r372.component';

const routes: Routes = [{ path: '', component: R372Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R372RoutingModule { }
