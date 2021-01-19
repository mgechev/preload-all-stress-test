import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R167Component } from './r167.component';

const routes: Routes = [{ path: '', component: R167Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R167RoutingModule { }
