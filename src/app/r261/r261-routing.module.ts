import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R261Component } from './r261.component';

const routes: Routes = [{ path: '', component: R261Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R261RoutingModule { }
