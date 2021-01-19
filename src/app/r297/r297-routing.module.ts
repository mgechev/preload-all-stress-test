import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R297Component } from './r297.component';

const routes: Routes = [{ path: '', component: R297Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R297RoutingModule { }
