import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R65Component } from './r65.component';

const routes: Routes = [{ path: '', component: R65Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R65RoutingModule { }
