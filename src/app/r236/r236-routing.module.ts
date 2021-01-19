import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R236Component } from './r236.component';

const routes: Routes = [{ path: '', component: R236Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R236RoutingModule { }
