import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R176Component } from './r176.component';

const routes: Routes = [{ path: '', component: R176Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R176RoutingModule { }
