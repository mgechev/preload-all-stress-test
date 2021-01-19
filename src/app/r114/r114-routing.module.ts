import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R114Component } from './r114.component';

const routes: Routes = [{ path: '', component: R114Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R114RoutingModule { }
