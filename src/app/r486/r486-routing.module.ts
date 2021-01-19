import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R486Component } from './r486.component';

const routes: Routes = [{ path: '', component: R486Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R486RoutingModule { }
