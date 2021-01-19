import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R95Component } from './r95.component';

const routes: Routes = [{ path: '', component: R95Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R95RoutingModule { }
