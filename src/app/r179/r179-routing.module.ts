import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R179Component } from './r179.component';

const routes: Routes = [{ path: '', component: R179Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R179RoutingModule { }
