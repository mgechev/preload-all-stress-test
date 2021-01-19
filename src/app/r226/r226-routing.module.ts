import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R226Component } from './r226.component';

const routes: Routes = [{ path: '', component: R226Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R226RoutingModule { }
