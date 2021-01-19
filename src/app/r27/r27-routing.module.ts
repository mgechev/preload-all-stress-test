import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R27Component } from './r27.component';

const routes: Routes = [{ path: '', component: R27Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R27RoutingModule { }
