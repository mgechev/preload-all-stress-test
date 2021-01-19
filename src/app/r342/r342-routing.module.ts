import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R342Component } from './r342.component';

const routes: Routes = [{ path: '', component: R342Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R342RoutingModule { }
