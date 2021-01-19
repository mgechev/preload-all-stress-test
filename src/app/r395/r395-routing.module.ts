import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R395Component } from './r395.component';

const routes: Routes = [{ path: '', component: R395Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R395RoutingModule { }
