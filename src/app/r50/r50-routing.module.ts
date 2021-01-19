import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R50Component } from './r50.component';

const routes: Routes = [{ path: '', component: R50Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R50RoutingModule { }
