import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R107Component } from './r107.component';

const routes: Routes = [{ path: '', component: R107Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R107RoutingModule { }
