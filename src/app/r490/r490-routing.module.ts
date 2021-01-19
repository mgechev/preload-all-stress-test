import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R490Component } from './r490.component';

const routes: Routes = [{ path: '', component: R490Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R490RoutingModule { }
