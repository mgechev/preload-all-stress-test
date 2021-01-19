import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R407Component } from './r407.component';

const routes: Routes = [{ path: '', component: R407Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R407RoutingModule { }
