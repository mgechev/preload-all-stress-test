import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R144Component } from './r144.component';

const routes: Routes = [{ path: '', component: R144Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R144RoutingModule { }
