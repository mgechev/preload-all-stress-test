import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R439Component } from './r439.component';

const routes: Routes = [{ path: '', component: R439Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R439RoutingModule { }
