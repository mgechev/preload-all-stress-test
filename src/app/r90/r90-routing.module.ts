import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R90Component } from './r90.component';

const routes: Routes = [{ path: '', component: R90Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R90RoutingModule { }
