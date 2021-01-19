import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R148Component } from './r148.component';

const routes: Routes = [{ path: '', component: R148Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R148RoutingModule { }
