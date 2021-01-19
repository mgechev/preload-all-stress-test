import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R233Component } from './r233.component';

const routes: Routes = [{ path: '', component: R233Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R233RoutingModule { }
