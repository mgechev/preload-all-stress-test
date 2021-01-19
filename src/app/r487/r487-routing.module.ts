import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R487Component } from './r487.component';

const routes: Routes = [{ path: '', component: R487Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R487RoutingModule { }
