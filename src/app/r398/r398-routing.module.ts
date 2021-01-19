import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R398Component } from './r398.component';

const routes: Routes = [{ path: '', component: R398Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R398RoutingModule { }
