import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R385Component } from './r385.component';

const routes: Routes = [{ path: '', component: R385Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R385RoutingModule { }
