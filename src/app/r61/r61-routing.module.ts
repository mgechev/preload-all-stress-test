import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R61Component } from './r61.component';

const routes: Routes = [{ path: '', component: R61Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R61RoutingModule { }
