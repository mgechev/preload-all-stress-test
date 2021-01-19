import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R457Component } from './r457.component';

const routes: Routes = [{ path: '', component: R457Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R457RoutingModule { }
