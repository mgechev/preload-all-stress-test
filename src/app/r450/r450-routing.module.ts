import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R450Component } from './r450.component';

const routes: Routes = [{ path: '', component: R450Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R450RoutingModule { }
