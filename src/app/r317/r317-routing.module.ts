import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R317Component } from './r317.component';

const routes: Routes = [{ path: '', component: R317Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R317RoutingModule { }
