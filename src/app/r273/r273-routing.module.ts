import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R273Component } from './r273.component';

const routes: Routes = [{ path: '', component: R273Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R273RoutingModule { }
