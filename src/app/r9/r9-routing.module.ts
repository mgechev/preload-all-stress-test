import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R9Component } from './r9.component';

const routes: Routes = [{ path: '', component: R9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R9RoutingModule { }
