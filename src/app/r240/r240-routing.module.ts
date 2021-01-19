import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R240Component } from './r240.component';

const routes: Routes = [{ path: '', component: R240Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R240RoutingModule { }
