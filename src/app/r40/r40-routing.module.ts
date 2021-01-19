import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R40Component } from './r40.component';

const routes: Routes = [{ path: '', component: R40Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R40RoutingModule { }
