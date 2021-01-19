import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R8Component } from './r8.component';

const routes: Routes = [{ path: '', component: R8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R8RoutingModule { }
