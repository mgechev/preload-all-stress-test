import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R299Component } from './r299.component';

const routes: Routes = [{ path: '', component: R299Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R299RoutingModule { }
