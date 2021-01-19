import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R20Component } from './r20.component';

const routes: Routes = [{ path: '', component: R20Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R20RoutingModule { }
