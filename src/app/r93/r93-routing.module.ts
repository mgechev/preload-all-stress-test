import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R93Component } from './r93.component';

const routes: Routes = [{ path: '', component: R93Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R93RoutingModule { }
