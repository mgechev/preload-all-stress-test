import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R37Component } from './r37.component';

const routes: Routes = [{ path: '', component: R37Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R37RoutingModule { }
