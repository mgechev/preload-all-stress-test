import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R473Component } from './r473.component';

const routes: Routes = [{ path: '', component: R473Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R473RoutingModule { }
