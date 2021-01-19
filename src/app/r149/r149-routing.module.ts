import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R149Component } from './r149.component';

const routes: Routes = [{ path: '', component: R149Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R149RoutingModule { }
