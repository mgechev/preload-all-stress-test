import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R111Component } from './r111.component';

const routes: Routes = [{ path: '', component: R111Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R111RoutingModule { }
