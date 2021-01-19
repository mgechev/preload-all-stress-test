import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R207Component } from './r207.component';

const routes: Routes = [{ path: '', component: R207Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R207RoutingModule { }
