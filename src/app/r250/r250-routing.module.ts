import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R250Component } from './r250.component';

const routes: Routes = [{ path: '', component: R250Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R250RoutingModule { }
