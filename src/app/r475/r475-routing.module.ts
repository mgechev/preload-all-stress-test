import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R475Component } from './r475.component';

const routes: Routes = [{ path: '', component: R475Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R475RoutingModule { }
