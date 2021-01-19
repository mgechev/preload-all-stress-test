import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R125Component } from './r125.component';

const routes: Routes = [{ path: '', component: R125Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R125RoutingModule { }
