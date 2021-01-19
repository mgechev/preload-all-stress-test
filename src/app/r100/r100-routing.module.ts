import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R100Component } from './r100.component';

const routes: Routes = [{ path: '', component: R100Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R100RoutingModule { }
