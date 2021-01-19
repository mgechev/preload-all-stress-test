import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R389Component } from './r389.component';

const routes: Routes = [{ path: '', component: R389Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R389RoutingModule { }
