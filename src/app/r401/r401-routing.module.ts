import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R401Component } from './r401.component';

const routes: Routes = [{ path: '', component: R401Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R401RoutingModule { }
