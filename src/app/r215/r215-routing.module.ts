import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R215Component } from './r215.component';

const routes: Routes = [{ path: '', component: R215Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R215RoutingModule { }
