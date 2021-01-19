import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R371Component } from './r371.component';

const routes: Routes = [{ path: '', component: R371Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R371RoutingModule { }
