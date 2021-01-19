import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R326Component } from './r326.component';

const routes: Routes = [{ path: '', component: R326Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R326RoutingModule { }
