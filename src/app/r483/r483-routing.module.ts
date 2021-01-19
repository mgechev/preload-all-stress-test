import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R483Component } from './r483.component';

const routes: Routes = [{ path: '', component: R483Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R483RoutingModule { }
