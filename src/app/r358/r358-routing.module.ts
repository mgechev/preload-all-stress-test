import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R358Component } from './r358.component';

const routes: Routes = [{ path: '', component: R358Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R358RoutingModule { }
