import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R87Component } from './r87.component';

const routes: Routes = [{ path: '', component: R87Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R87RoutingModule { }
