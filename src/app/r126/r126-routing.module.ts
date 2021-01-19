import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R126Component } from './r126.component';

const routes: Routes = [{ path: '', component: R126Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R126RoutingModule { }
