import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R68Component } from './r68.component';

const routes: Routes = [{ path: '', component: R68Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R68RoutingModule { }
