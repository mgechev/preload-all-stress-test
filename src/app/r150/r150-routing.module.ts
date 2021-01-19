import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R150Component } from './r150.component';

const routes: Routes = [{ path: '', component: R150Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R150RoutingModule { }
