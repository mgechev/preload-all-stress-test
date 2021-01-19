import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R419Component } from './r419.component';

const routes: Routes = [{ path: '', component: R419Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R419RoutingModule { }
