import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R181Component } from './r181.component';

const routes: Routes = [{ path: '', component: R181Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R181RoutingModule { }
