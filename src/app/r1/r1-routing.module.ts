import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R1Component } from './r1.component';

const routes: Routes = [{ path: '', component: R1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R1RoutingModule { }
