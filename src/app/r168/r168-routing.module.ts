import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R168Component } from './r168.component';

const routes: Routes = [{ path: '', component: R168Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R168RoutingModule { }
