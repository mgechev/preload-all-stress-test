import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R196Component } from './r196.component';

const routes: Routes = [{ path: '', component: R196Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R196RoutingModule { }
