import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R489Component } from './r489.component';

const routes: Routes = [{ path: '', component: R489Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R489RoutingModule { }
