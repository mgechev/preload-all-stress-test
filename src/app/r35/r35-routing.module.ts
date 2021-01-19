import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R35Component } from './r35.component';

const routes: Routes = [{ path: '', component: R35Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R35RoutingModule { }
