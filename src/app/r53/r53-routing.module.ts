import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R53Component } from './r53.component';

const routes: Routes = [{ path: '', component: R53Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R53RoutingModule { }
