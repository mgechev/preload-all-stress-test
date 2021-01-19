import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R44Component } from './r44.component';

const routes: Routes = [{ path: '', component: R44Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R44RoutingModule { }
