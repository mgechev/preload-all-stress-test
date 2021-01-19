import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R43Component } from './r43.component';

const routes: Routes = [{ path: '', component: R43Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R43RoutingModule { }
