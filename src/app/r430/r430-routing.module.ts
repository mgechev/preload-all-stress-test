import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R430Component } from './r430.component';

const routes: Routes = [{ path: '', component: R430Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R430RoutingModule { }
