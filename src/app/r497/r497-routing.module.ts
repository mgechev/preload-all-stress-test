import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R497Component } from './r497.component';

const routes: Routes = [{ path: '', component: R497Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R497RoutingModule { }
