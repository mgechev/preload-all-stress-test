import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R270Component } from './r270.component';

const routes: Routes = [{ path: '', component: R270Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R270RoutingModule { }
