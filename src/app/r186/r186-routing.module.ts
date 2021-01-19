import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R186Component } from './r186.component';

const routes: Routes = [{ path: '', component: R186Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R186RoutingModule { }
