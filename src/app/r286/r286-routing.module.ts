import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R286Component } from './r286.component';

const routes: Routes = [{ path: '', component: R286Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R286RoutingModule { }
