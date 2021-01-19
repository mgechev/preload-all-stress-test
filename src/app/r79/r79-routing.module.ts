import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R79Component } from './r79.component';

const routes: Routes = [{ path: '', component: R79Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R79RoutingModule { }
