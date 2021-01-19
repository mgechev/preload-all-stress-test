import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R370Component } from './r370.component';

const routes: Routes = [{ path: '', component: R370Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R370RoutingModule { }
