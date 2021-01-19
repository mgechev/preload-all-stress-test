import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R153Component } from './r153.component';

const routes: Routes = [{ path: '', component: R153Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R153RoutingModule { }
