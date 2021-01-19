import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R187Component } from './r187.component';

const routes: Routes = [{ path: '', component: R187Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R187RoutingModule { }
