import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R5Component } from './r5.component';

const routes: Routes = [{ path: '', component: R5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R5RoutingModule { }
