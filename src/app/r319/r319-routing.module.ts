import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R319Component } from './r319.component';

const routes: Routes = [{ path: '', component: R319Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R319RoutingModule { }
