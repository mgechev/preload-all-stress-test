import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R292Component } from './r292.component';

const routes: Routes = [{ path: '', component: R292Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R292RoutingModule { }
