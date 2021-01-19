import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R147Component } from './r147.component';

const routes: Routes = [{ path: '', component: R147Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R147RoutingModule { }
