import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R188Component } from './r188.component';

const routes: Routes = [{ path: '', component: R188Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R188RoutingModule { }
