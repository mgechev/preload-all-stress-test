import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R255Component } from './r255.component';

const routes: Routes = [{ path: '', component: R255Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R255RoutingModule { }
