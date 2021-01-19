import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R62Component } from './r62.component';

const routes: Routes = [{ path: '', component: R62Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R62RoutingModule { }
