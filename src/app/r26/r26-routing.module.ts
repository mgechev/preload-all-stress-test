import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R26Component } from './r26.component';

const routes: Routes = [{ path: '', component: R26Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R26RoutingModule { }
