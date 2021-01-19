import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R303Component } from './r303.component';

const routes: Routes = [{ path: '', component: R303Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R303RoutingModule { }
