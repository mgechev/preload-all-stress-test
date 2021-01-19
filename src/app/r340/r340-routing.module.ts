import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R340Component } from './r340.component';

const routes: Routes = [{ path: '', component: R340Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R340RoutingModule { }
