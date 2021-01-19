import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R32Component } from './r32.component';

const routes: Routes = [{ path: '', component: R32Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R32RoutingModule { }
