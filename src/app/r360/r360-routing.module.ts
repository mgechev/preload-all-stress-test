import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R360Component } from './r360.component';

const routes: Routes = [{ path: '', component: R360Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R360RoutingModule { }
