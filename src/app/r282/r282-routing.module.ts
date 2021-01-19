import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R282Component } from './r282.component';

const routes: Routes = [{ path: '', component: R282Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R282RoutingModule { }
