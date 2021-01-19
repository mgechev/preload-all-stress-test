import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R291Component } from './r291.component';

const routes: Routes = [{ path: '', component: R291Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R291RoutingModule { }
