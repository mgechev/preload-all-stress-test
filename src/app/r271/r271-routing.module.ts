import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R271Component } from './r271.component';

const routes: Routes = [{ path: '', component: R271Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R271RoutingModule { }
