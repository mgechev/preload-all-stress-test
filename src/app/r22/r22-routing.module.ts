import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R22Component } from './r22.component';

const routes: Routes = [{ path: '', component: R22Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R22RoutingModule { }
