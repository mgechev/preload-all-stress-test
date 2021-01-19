import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R331Component } from './r331.component';

const routes: Routes = [{ path: '', component: R331Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R331RoutingModule { }
