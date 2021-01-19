import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R338Component } from './r338.component';

const routes: Routes = [{ path: '', component: R338Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R338RoutingModule { }
