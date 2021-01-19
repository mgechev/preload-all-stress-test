import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R406Component } from './r406.component';

const routes: Routes = [{ path: '', component: R406Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R406RoutingModule { }
