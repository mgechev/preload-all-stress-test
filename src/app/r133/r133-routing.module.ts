import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R133Component } from './r133.component';

const routes: Routes = [{ path: '', component: R133Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R133RoutingModule { }
