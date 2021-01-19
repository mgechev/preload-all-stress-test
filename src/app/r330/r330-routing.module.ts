import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R330Component } from './r330.component';

const routes: Routes = [{ path: '', component: R330Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R330RoutingModule { }
