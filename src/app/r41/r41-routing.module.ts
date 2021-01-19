import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R41Component } from './r41.component';

const routes: Routes = [{ path: '', component: R41Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R41RoutingModule { }
