import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R480Component } from './r480.component';

const routes: Routes = [{ path: '', component: R480Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R480RoutingModule { }
