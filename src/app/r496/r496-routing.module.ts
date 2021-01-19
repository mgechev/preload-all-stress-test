import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R496Component } from './r496.component';

const routes: Routes = [{ path: '', component: R496Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R496RoutingModule { }
