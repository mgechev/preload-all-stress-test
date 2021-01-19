import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R448Component } from './r448.component';

const routes: Routes = [{ path: '', component: R448Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R448RoutingModule { }
