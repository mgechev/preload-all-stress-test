import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R231Component } from './r231.component';

const routes: Routes = [{ path: '', component: R231Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R231RoutingModule { }
