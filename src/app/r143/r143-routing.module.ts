import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R143Component } from './r143.component';

const routes: Routes = [{ path: '', component: R143Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R143RoutingModule { }
