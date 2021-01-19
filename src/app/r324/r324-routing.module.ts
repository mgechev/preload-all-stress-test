import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R324Component } from './r324.component';

const routes: Routes = [{ path: '', component: R324Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R324RoutingModule { }
