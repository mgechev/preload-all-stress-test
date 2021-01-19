import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R455Component } from './r455.component';

const routes: Routes = [{ path: '', component: R455Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R455RoutingModule { }
