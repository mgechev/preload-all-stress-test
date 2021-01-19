import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R294Component } from './r294.component';

const routes: Routes = [{ path: '', component: R294Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R294RoutingModule { }
