import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R459Component } from './r459.component';

const routes: Routes = [{ path: '', component: R459Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R459RoutingModule { }
