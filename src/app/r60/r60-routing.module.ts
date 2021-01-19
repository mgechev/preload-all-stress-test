import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R60Component } from './r60.component';

const routes: Routes = [{ path: '', component: R60Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R60RoutingModule { }
