import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R16Component } from './r16.component';

const routes: Routes = [{ path: '', component: R16Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R16RoutingModule { }
