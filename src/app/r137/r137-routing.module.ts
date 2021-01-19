import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R137Component } from './r137.component';

const routes: Routes = [{ path: '', component: R137Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R137RoutingModule { }
