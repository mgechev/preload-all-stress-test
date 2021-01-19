import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R85Component } from './r85.component';

const routes: Routes = [{ path: '', component: R85Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R85RoutingModule { }
