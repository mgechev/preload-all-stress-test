import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R121Component } from './r121.component';

const routes: Routes = [{ path: '', component: R121Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R121RoutingModule { }
