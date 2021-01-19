import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R2Component } from './r2.component';

const routes: Routes = [{ path: '', component: R2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R2RoutingModule { }
