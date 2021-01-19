import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R234Component } from './r234.component';

const routes: Routes = [{ path: '', component: R234Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R234RoutingModule { }
