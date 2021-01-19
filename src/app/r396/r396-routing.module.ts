import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R396Component } from './r396.component';

const routes: Routes = [{ path: '', component: R396Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R396RoutingModule { }
