import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R491Component } from './r491.component';

const routes: Routes = [{ path: '', component: R491Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R491RoutingModule { }
