import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R162Component } from './r162.component';

const routes: Routes = [{ path: '', component: R162Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R162RoutingModule { }
