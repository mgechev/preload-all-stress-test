import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R404Component } from './r404.component';

const routes: Routes = [{ path: '', component: R404Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R404RoutingModule { }
