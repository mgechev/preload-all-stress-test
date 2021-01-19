import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R311Component } from './r311.component';

const routes: Routes = [{ path: '', component: R311Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R311RoutingModule { }
