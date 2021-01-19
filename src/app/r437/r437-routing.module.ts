import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R437Component } from './r437.component';

const routes: Routes = [{ path: '', component: R437Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R437RoutingModule { }
