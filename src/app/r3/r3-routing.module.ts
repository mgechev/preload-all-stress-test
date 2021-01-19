import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R3Component } from './r3.component';

const routes: Routes = [{ path: '', component: R3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R3RoutingModule { }
