import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R161Component } from './r161.component';

const routes: Routes = [{ path: '', component: R161Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R161RoutingModule { }
