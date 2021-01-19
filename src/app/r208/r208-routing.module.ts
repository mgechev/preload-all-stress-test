import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R208Component } from './r208.component';

const routes: Routes = [{ path: '', component: R208Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R208RoutingModule { }
