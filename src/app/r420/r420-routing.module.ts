import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R420Component } from './r420.component';

const routes: Routes = [{ path: '', component: R420Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R420RoutingModule { }
