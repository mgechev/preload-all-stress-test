import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R348Component } from './r348.component';

const routes: Routes = [{ path: '', component: R348Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R348RoutingModule { }
