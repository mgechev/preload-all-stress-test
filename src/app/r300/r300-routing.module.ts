import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R300Component } from './r300.component';

const routes: Routes = [{ path: '', component: R300Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R300RoutingModule { }
