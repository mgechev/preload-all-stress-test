import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R305Component } from './r305.component';

const routes: Routes = [{ path: '', component: R305Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R305RoutingModule { }
