import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R18Component } from './r18.component';

const routes: Routes = [{ path: '', component: R18Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R18RoutingModule { }
