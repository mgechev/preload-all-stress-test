import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R4Component } from './r4.component';

const routes: Routes = [{ path: '', component: R4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R4RoutingModule { }
