import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R160Component } from './r160.component';

const routes: Routes = [{ path: '', component: R160Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R160RoutingModule { }
