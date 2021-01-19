import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R479Component } from './r479.component';

const routes: Routes = [{ path: '', component: R479Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R479RoutingModule { }
