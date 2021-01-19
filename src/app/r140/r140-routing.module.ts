import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R140Component } from './r140.component';

const routes: Routes = [{ path: '', component: R140Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R140RoutingModule { }
