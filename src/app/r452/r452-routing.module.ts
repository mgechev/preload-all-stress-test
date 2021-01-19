import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R452Component } from './r452.component';

const routes: Routes = [{ path: '', component: R452Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R452RoutingModule { }
