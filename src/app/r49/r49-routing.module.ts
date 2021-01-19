import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R49Component } from './r49.component';

const routes: Routes = [{ path: '', component: R49Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R49RoutingModule { }
