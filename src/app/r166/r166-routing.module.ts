import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R166Component } from './r166.component';

const routes: Routes = [{ path: '', component: R166Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R166RoutingModule { }
