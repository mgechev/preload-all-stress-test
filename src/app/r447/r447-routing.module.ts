import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R447Component } from './r447.component';

const routes: Routes = [{ path: '', component: R447Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R447RoutingModule { }
