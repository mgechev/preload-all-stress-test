import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R400Component } from './r400.component';

const routes: Routes = [{ path: '', component: R400Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R400RoutingModule { }
