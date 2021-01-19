import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R414Component } from './r414.component';

const routes: Routes = [{ path: '', component: R414Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R414RoutingModule { }
